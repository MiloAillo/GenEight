const express = require('express')                      //import express for backend
const path = require('path')                            //import path
const db =  require('./database')                     //import settingan database dari database.js
const session = require('express-session')            //import session
const cors = require('cors')                        // import cors (development only)
const multer = require('multer')                    // import multer
const bcrypt = require('bcrypt')                    // import bcrypt for password hashing


const app = express()                   // unboxing express
const PORT = 3000                          // port lokal
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/img"),
  filename:    (req, file, cb) => cb(null, "kepsek.png")
})
function fileFilter(req, file, cb) {
  // you can check file.mimetype or extension
  if (file.mimetype === "image/png") {
    cb(null, true)    // accept the file
  } else {
    cb(new Error("Only PNG images are allowed"), false)
  }
}
// Middleware
app.use(express.json())                               //parse json
app.use(express.urlencoded({ extended: true }))      //parse urlencoded
app.use(session({                                      // setup express session
    secret : 'yangtautauaja1234567890',
    resave : false,
    saveUninitialized : false,
    cookie : {
        secure: false,
        maxAge : 1000 * 60 * 60 * 24 // 1 day
    }
}))
const upload = multer({
    storage: storage,
    fileFilter: fileFilter
})
app.use(cors({                                          //setup cors (development only)
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"]
}))

function isAuthenticated(req, res, next) {              // Middleware buat ngecek user sudah login apa belum
    if (req.session.user) {
        return next()
    } else {
        return res.status(401).send("Unauthorized") // kalau belum login, redirect ke halaman login
    }
}

// setting port saat launch
app.listen(PORT, () => {
    console.log(`Awctivated at ${PORT}`)
})

app.use(express.static(path.join(__dirname, 'public'))) // serve static files from public directory

app.use('/secure', isAuthenticated, express.static(path.join(__dirname, 'secure'))
)

app.get('/', (req, res) => { // prevent directory listing (redirect / ke index.html)
    res.redirect('index.html')
})

app.post('/register', isAuthenticated, async (req, res) => { // tambah akun endpoint
    const { user, pass, email } = req.body

    const [rowsUsername] = await db.promise().query(
      'SELECT userID FROM users WHERE username = ?',
      [user]
    )

    const [rowsEmail] = await db.promise().query(
      'SELECT userID FROM users WHERE email = ?',
      [email]
    )

    const usernameExists = rowsUsername.length > 0
    const emailExists = rowsEmail.length > 0

    if (usernameExists && emailExists) {
      // Keduanya terpakai
      return res.redirect('./secure/register/registerNoEmailUsername.html')
    } else if (usernameExists) {
      // Hanya username yang sudah terpakai
      return res.redirect('./secure/register/registerNoUsername.html')
    } else if (emailExists) {
      // Hanya email yang sudah terpakai
      return res.redirect('./secure/register/registerNoEmail.html')
    }

    try {
    const hashedPassword = await bcrypt.hash(pass, 12) // Hash pw
    const response = await db.promise().query(`INSERT INTO users (username, password, email) VALUES (?, ?, ?)`, [user, hashedPassword, email])
    res.redirect('/admin')
    } catch(err) {
        console.log(err)
        res.redirect('login/register.html')
    }
})

app.post('/login', async (req, res) => { // Login endpoint
    const { username, password } = req.body
    try {
        const [rows] = await db.promise().query(`SELECT * FROM users WHERE username = ?`, [username])

        if (rows.length === 0) {
            return res.redirect('login/loginSalah.html')
        }

        const user = rows[0]
        const userPass = user.password
        const isMatch = await bcrypt.compare(password, userPass)
        if (!isMatch) {
            return res.redirect('login/loginSalah.html')
        }

        req.session.user = { id: user.userID }
        return res.redirect('/admin')

    } catch(err) {
        console.log(err)
        return res.status(500).send('Error logging in')
    }
})


app.get('/admin', isAuthenticated, (req, res) => { // admin page endpoint
    res.redirect("/secure/admin.html")
})

app.get('/tambahAkun', isAuthenticated, (req, res) => { // tambah akun endpoint buat redirect
    res.redirect("/secure/tambahAkun.html")
})

app.get('/logout', (req, res) => { // logout endpoint
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error Logging Out!')
        }
        res.clearCookie('connect.sid')
        res.redirect('/')
    })
})

app.get('/lihatBerita', async (req, res) => {
    const [rows, fields] = await db.promise().query('SELECT users.username, berita.judul, berita.isi, berita.waktu, berita.beritaID from users RIGHT JOIN berita ON users.userID = berita.userID ORDER BY berita.waktu')
    if (rows.length === 0) {
        return res.sendStatus(204)
    }
    const formatted = rows.map(row => ({
      beritaID: row.beritaID,
      username: row.username,
      judul:    row.judul,
      isi:      row.isi.replace(/\n/g, '<br>'),
      waktu:    new Date(row.waktu).toISOString().slice(0, 10)
    }));
    res.send(formatted)
})

app.post('/postBerita', isAuthenticated, async (req, res) => {
    const { judul, isi } = req.body
    const id = req.session.user.id 
    try {
        const response = await db.promise().query(`INSERT INTO berita (userID, judul, isi) VALUES (?, ?, ?)`, [id, judul, isi])
        res.send(response)
    } catch(err) {
        res.send(err)
    }
})

app.post('/hapusBerita', isAuthenticated, async (req, res) => {
    const id = req.body.id
    try {
        const response = await db.promise().query(`DELETE FROM berita WHERE beritaID = ?`, [id])
        res.send(response)
        console.log(response)
    } catch(err) {
        res.send(err)
    }
})

app.post('/lihatMateri', async (req, res) => {
    const { jurusan } = req.body
    const [rows, fields] = await db.promise().query(`SELECT materi, materiID from materi WHERE jurusan=? `, [jurusan])
    console.log(rows)
    const formatted = rows.map(row => ({
    materi: row.materi.replace(/\n/g, '<br>'),
    materiID: row.materiID
    }))
    res.send(formatted)
})

app.post('/lihatLulusan', async (req, res) => {
    const { jurusan } = req.body
    const [rows, fields] = await db.promise().query(`SELECT lulusan, lulusanID from lulusan WHERE jurusan=? `, [jurusan])
    console.log(rows)
    const formatted = rows.map(row => ({
    lulusan: row.lulusan.replace(/\n/g, '<br>'),
    lulusanID: row.lulusanID
    }))
    res.send(formatted)
})

app.post('/lihatKejuaraan', async (req, res) => {
    const { jurusan } = req.body
    const [rows, fields] = await db.promise().query(`SELECT kejuaraan, kejuaraanID from kejuaraan WHERE jurusan=? `, [jurusan])
    console.log(rows)
    const formatted = rows.map(row => ({
    kejuaraan: row.kejuaraan.replace(/\n/g, '<br>'),
    kejuaraanID: row.kejuaraanID
    }))
    res.send(formatted)
})

// app.post('/updateMateri', isAuthenticated, async (req, res) => {
//     const { jurusan, materi } = req.body
//     let PK = "";
//     if (jurusan === "PPLG") {
//         PK = 1
//     } else if (jurusan === "TJKT") {
//         PK = 2
//     } else if (jurusan === "DKV") {
//         PK = 3
//     } else if (jurusan === "PS") {
//         PK = 4
//     } else if (jurusan === "LK"){
//         PK = 5
//     }
//     const id = req.session.user.id
//     try {
//         const response = await db.promise().query(`UPDATE materi SET materi = ?, userID = ? WHERE jurusan = ? AND materiID = ?`, [materi, id, jurusan, PK])
//         res.json({ response: response })
//     } catch(err) {
//         res.json({ response: 'Server Error' })
//     }
// })

// app.post('/updateLulusan', isAuthenticated, async (req, res) => {
//     const { jurusan, lulusan } = req.body
//     let PK = "";
//     if (jurusan === "PPLG") {
//         PK = 1
//     } else if (jurusan === "TJKT") {
//         PK = 4
//     } else if (jurusan === "DKV") {
//         PK = 2
//     } else if (jurusan === "PS") {
//         PK = 5
//     } else if (jurusan === "LK"){
//         PK = 3
//     }
//     const id = req.session.user.id
//     try {
//         const response = await db.promise().query(`UPDATE lulusan SET lulusan = ?, userID = ? WHERE jurusan = ? AND lulusanID = ?`, [lulusan, id, jurusan, PK])
//         res.json({ response: response })
//     } catch(err) {
//         console.log(err)
//         res.json({ response: 'Server Error' })
//     }
// })

// app.post('/updateKejuaraan', isAuthenticated, async (req, res) => {
//     const { jurusan, kejuaraan } = req.body
//     let PK = "";
//     if (jurusan === "PPLG") {
//         PK = 1
//     } else if (jurusan === "TJKT") {
//         PK = 4
//     } else if (jurusan === "DKV") {
//         PK = 2
//     } else if (jurusan === "PS") {
//         PK = 5
//     } else if (jurusan === "LK"){
//         PK = 3
//     }
//     const id = req.session.user.id
//     try {
//         const response = await db.promise().query(`UPDATE kejuaraan SET kejuaraan = ?, userID = ? WHERE jurusan = ? AND kejuaraanID= ?`, [kejuaraan, id, jurusan, PK])
//         res.json({ response: response })
//     } catch(err) {
//         console.log(err)
//         res.json({ response: 'Server Error' })
//     }
// })

app.post('/tambahKejuaraan', isAuthenticated, async (req, res) => {
    const { jurusan, kejuaraan } = req.body
    if (!kejuaraan) {
        return res.status(400).send("data kosong")
    }
    const id = req.session.user.id
    try {
        const response = await db.promise().query(`INSERT INTO kejuaraan (userID, jurusan, kejuaraan) VALUES (?, ?, ?)`, [id, jurusan, kejuaraan])
        res.json({ response: "Materi berhasil ditambah", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post('/tambahMateri', isAuthenticated, async (req, res) => {
    const { jurusan, materi } = req.body
        if (!materi) {
        return res.status(400).send("data kosong")
    }
    const id = req.session.user.id
    try {
        const response = await db.promise().query(`INSERT INTO materi (userID, jurusan, materi) VALUES (?, ?, ?)`, [id, jurusan, materi])
        res.json({ response: "Materi berhasil ditambah", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post('/tambahLulusan', isAuthenticated, async (req, res) => {
    const { jurusan, lulusan } = req.body
        if (!lulusan) {
        return res.status(400).send("data kosong")
    }
    const id = req.session.user.id
    try {
        const response = await db.promise().query(`INSERT INTO lulusan (userID, jurusan, lulusan) VALUES (?, ?, ?)`, [id, jurusan, lulusan])
        res.json({ response: "Materi berhasil ditambah", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post('/hapusMateri', isAuthenticated, async (req, res) => {
    const id = req.body.id
    console.log(id)
    try {
        const response = await db.promise().query(`DELETE FROM materi WHERE materiID = ?`, [id])
        res.json({ response: "data materi berhasil dihapus", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post('/hapusKejuaraan', isAuthenticated, async (req, res) => {
    const id = req.body.id
    console.log(id)
    try {
        const response = await db.promise().query(`DELETE FROM kejuaraan WHERE kejuaraanID = ?`, [id])
        res.json({ response: "data kejuaraan berhasil dihapus", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post('/hapusLulusan', isAuthenticated, async (req, res) => {
    const id = req.body.id
    console.log(id)
    try {
        const response = await db.promise().query(`DELETE FROM lulusan WHERE lulusanID = ?`, [id])
        res.json({ response: "data lulusan berhasil dihapus", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.get("/lihatQna", async (req, res) => {
    const [rows, fields] = await db.promise().query('SELECT users.username, qna.pertanyaan, qna.jawaban, qna.idQnA from users RIGHT JOIN qna ON users.userID = qna.userID')
    console.log(rows)
    if (rows.length === 0) {
        return res.sendStatus(204)
    }
    const formatted = rows.map(row => ({
      idQnA: row.idQnA,
      username: row.username,
      pertanyaan: row.pertanyaan,
      jawaban: row.jawaban.replace(/\n/g, '<br>')
    }));
    res.send(formatted)
})

app.post("/tambahQna", isAuthenticated, async (req, res) => {
    const { pertanyaan, jawaban } = req.body
    const id = req.session.user.id
    try {
        const response = await db.promise().query(`INSERT INTO qna (userID, pertanyaan, jawaban) VALUES (?, ?, ?)`, [id, pertanyaan, jawaban])
        res.json({ response: "Sukses menambahkan QnA!", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post("/hapusQna", isAuthenticated, async (req, res) => {
    const idQnA = req.body.id
    try {
        const response = await db.promise().query(`DELETE FROM qna WHERE idQnA = ?`, [idQnA])
        res.json({ response: "Berhasil menghapus data QnA!", sql: response })
    } catch(err) {
        res.send(err)
    }
})

app.post("/updateKepsek", isAuthenticated, upload.single("kepsek"), (req, res) => {
    res.redirect("/admin")
})

app.get("/detailBerita/:id", async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const [rows, fields] = await db.promise().query(`SELECT users.username, berita.* from users RIGHT JOIN berita ON users.userID = berita.userID WHERE beritaID = ?`, [id])
    if (rows.length === 0) {
        return res.sendStatus(204)
    }
    const formatted = rows.map(row => ({
      beritaID: row.beritaID,
      username: row.username,
      judul:    row.judul,
      isi:      row.isi.replace(/\n/g, '<br>'),
      waktu:    new Date(row.waktu).toISOString().slice(0, 10)
    }));
    res.send(formatted)
})