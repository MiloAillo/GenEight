const menuBTN = document.querySelector("#navbarExtendBTN"); // Navbar : mengambil elemen tombol menu
const menu = document.querySelector("#navbarExtended"); // Navbar : mengambil elemen menu
const tabsBerita = document.getElementById('berita') // Tabs
const tabsData = document.getElementById('data') // Tabs
const tabsQna = document.getElementById('qna') // Tabs
const tabsGambar = document.getElementById('gambar') // Tabs
const beritaContent = document.querySelector(".berita") // konten tabs berita
const JurusanContent = document.querySelector(".jurusan") // konten tabs jurusan
const qnaContent = document.querySelector(".qna") // konten tabs qna
const gambarContent = document.querySelector(".img") // konten tabs gambar

let isOpen = false; // Navbar : status menu (open/close)
menuBTN.addEventListener("click", () => { // Navbar : logika menu mobile
    if (!isOpen) {
        menu.style.display = "flex";
        menuBTN.textContent = "close"; // Navbar : ganti icon menjadi close (X)
        isOpen = true;
    } else {
        menu.style.display = "none";
        menuBTN.textContent = "menu"; // Navbar : ganti icon menjadi menu (≡)
        isOpen = false;
    }
});

// TABS: function
function clickedBerita() {
    tabsBerita.style.backgroundColor = "white"
    tabsBerita.style.borderBottom = "none"
    tabsData.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsData.style.borderBottom = "1px solid black"
    tabsQna.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsQna.style.borderBottom = "1px solid black"
    tabsGambar.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsGambar.style.borderBottom = "1px solid black"
    beritaContent.style.display = "flex"
    JurusanContent.style.display = "none"
    qnaContent.style.display = "none"
    gambarContent.style.display = "none"
}

function clickedData() {
    tabsData.style.backgroundColor = "white"
    tabsData.style.borderBottom = "none"
    tabsBerita.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsBerita.style.borderBottom = "1px solid black"
    tabsQna.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsQna.style.borderBottom = "1px solid black"
    tabsGambar.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsGambar.style.borderBottom = "1px solid black"
    beritaContent.style.display = "none"
    JurusanContent.style.display = "flex"
    qnaContent.style.display = "none"
    gambarContent.style.display = "none"
}

function clickedQna() {
    tabsQna.style.backgroundColor = "white"
    tabsQna.style.borderBottom = "none"
    tabsData.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsData.style.borderBottom = "1px solid black"
    tabsBerita.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsBerita.style.borderBottom = "1px solid black"
    tabsGambar.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsGambar.style.borderBottom = "1px solid black"
    beritaContent.style.display = "none"
    JurusanContent.style.display = "none"
    qnaContent.style.display = "flex"
    gambarContent.style.display = "none"
}

function clickedGambar() {
    tabsGambar.style.backgroundColor = "white"
    tabsGambar.style.borderBottom = "none"
    tabsData.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsData.style.borderBottom = "1px solid black"
    tabsBerita.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsBerita.style.borderBottom = "1px solid black"
    tabsQna.style.backgroundColor = "rgba(0, 0, 0, 0.092)"
    tabsQna.style.borderBottom = "1px solid black"
    beritaContent.style.display = "none"
    JurusanContent.style.display = "none"
    qnaContent.style.display = "none"
    gambarContent.style.display = "flex"
}   

// TABS: Event Listener
tabsBerita.addEventListener('click', clickedBerita)
tabsData.addEventListener('click', clickedData)
tabsQna.addEventListener('click', clickedQna)
tabsGambar.addEventListener('click', clickedGambar)

// BERITA
// Post Berita
const judul = document.getElementById("judul")
const isi = document.getElementById("isi")
const warning = document.getElementById("beritaWarning")
const success = document.getElementById("beritaSuccess")
const gagal = document.getElementById("beritaGagal")
const kelebihan = document.getElementById("beritaKelebihan")

async function postBerita() {
    success.style.display = "none"
    gagal.style.display = "none"
    warning.style.display = "none"
    kelebihan.style.display = "none"
    if (judul.value && isi.value) { // cek kalau input sudah ada isinya
        if (judul.value.length >= 255) { 
            console.log("Judul terlalu panjang") // dbg
            kelebihan.style.display = "block"

        } else {
            console.log(`${judul.value} ${isi.value}`) //dbg
            warning.style.display = "none" // set warning false
            kelebihan.style.display = "none"

            try {   // mintak data backend
                const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/postBerita", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ judul: judul.value, isi: isi.value })
                })
                const json = await response.json()
                console.log(json)
                success.style.display = "block"
                lihatBerita()
            } catch(err) {
                console.log(err)
                warning.style.display = "block"
            }
        }
    } else {
        console.log("no value") // dbg
        warning.style.display = "block" // set warning true
    }
}

// Lihat Berita
const lihatBeritaGagal = document.getElementById("lihatBeritagagal")

async function lihatBerita() {
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatBerita")
        if (response.status === 204) {
            renderBeritaKosong()
        } else {
        const data = await response.json()
        console.log(data)
        renderBerita(data)
        }
    } catch (err) {
        console.log(err)
        lihatBeritaGagal.style.display = "block"
        renderBerita()
    }
}

const outputBerita = document.getElementById("outputData")

function renderBerita(posts) {
    let htmlBerita = ""
    outputBerita.innerHTML = ""
    for (post of posts) {

    htmlBerita += `
    <div class="beritaContent">
        <p class="judul">${post.judul}</p>
        <div class="deskripsi">
            <p class="username">${post.waktu}</p><p> | </p>
            <p class="waktu">${post.username}</p>
        </div>
        <p class="isi">${post.isi}</p>
        <div class="hapusBeritaBTN hapusBTN"><button onclick="hapusBerita(${post.beritaID})">Hapus</button></div>
    </div>
    `
    }
    outputBerita.innerHTML = htmlBerita
}


function renderBeritaKosong() {
    outputBerita.innerHTML = ""
}
lihatBerita()

// Hapus Berita
async function hapusBerita(id) {
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/hapusBerita", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id })
        })
        const data = await response.json()
        console.log(data)
        lihatBerita()
    } catch(err) {
        console.log("Internal Error!")
    }
}

tabsBerita.addEventListener("click", lihatBerita())

// JURUSAN
// tambah data jurusan
async function tambahLulusan() { // const diganti DOM
    const warning = document.getElementById("lulusanWarning")
    const berhasil = document.getElementById("lulusanBerhasil")
    const error = document.getElementById("lulusanError")
    const jurusan = document.getElementById("jurusanDD").value
    const isi = document.getElementById("lulusanInput").value
    berhasil.style.display = "none"
    if (!isi) {return warning.style.display = "block"}
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/tambahLulusan", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ jurusan: jurusan, lulusan: isi })
        })
        const data = await response.json()
        console.log(data)
        berhasil.style.display = "block"
        warning.style.display = "none"
        fetchJurusan()
    } catch(err) {
        console.log(err)
        error.style.display = "block"
    }
}

async function tambahKejuaraan() { // const ganti DOM
    const warning = document.getElementById("kejuaraanWarning")
    const berhasil = document.getElementById("kejuaraanBerhasil")
    const error = document.getElementById("kejuaraanError")
    const jurusan = document.getElementById("jurusanDD").value
    const isi = document.getElementById("kejuaraanInput").value
    berhasil.style.display = "none"
    if (!isi) {return warning.style.display = "block"}
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/tambahKejuaraan", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ jurusan: jurusan, kejuaraan: isi })
        })
        const data = await response.json()
        console.log(data)
        berhasil.style.display = "block"
        warning.style.display = "none"
        fetchJurusan()
    } catch(err) {
        console.log(err)
        error.style.display = "block"
    }
}

async function tambahMateri() { // const ganti DOM
    const warning = document.getElementById("materiWarning")
    const berhasil = document.getElementById("materiBerhasil")
    const error = document.getElementById("materiError")
    const jurusan = document.getElementById("jurusanDD").value
    const isi = document.getElementById("materiInput").value
    berhasil.style.display = "none"
    if (!isi) {return warning.style.display = "block"}
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/tambahMateri", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ jurusan: jurusan, materi: isi })
        })
        const data = await response.json()
        console.log(data)
        berhasil.style.display = "block"
        warning.style.display = "none"
        fetchJurusan()
    } catch(err) {
        console.log(err)
        error.style.display = "block"
    }
}

// delete data jurusan
async function hapusMateri(id) { // kasih id
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/hapusMateri", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id })
        })
        const data = await response.json()
        console.log(data)
        fetchJurusan()
    } catch(err) {
        console.log(err)
    }
}

async function hapusKejuaraan(id) { // kasih id
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/hapusKejuaraan", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id })
        })
        const data = await response.json()
        console.log(data)
        fetchJurusan()
    } catch(err) {
        console.log(err)
    }
}

async function hapusLulusan(id) { // kasih id
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/hapusLulusan", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id })
        })
        const data = await response.json()
        console.log(data)
        fetchJurusan()
    } catch(err) {
        console.log(err)
    }
}

// fetch Backend komplit
const jurusanDD = document.getElementById("jurusanDD")

jurusanDD.addEventListener("change", fetchJurusan)

async function fetchJurusan() {
    const jurusan = jurusanDD.value
    console.log(jurusan)
    try { // materi
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatMateri", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ jurusan: jurusan })
    })
    const data = await response.json()
    renderMateri(data)
    } catch(err) {
        console.log(err)
    }
    try { // kejuaraan
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatkejuaraan", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ jurusan: jurusan })
    })
    const data = await response.json()
    renderKejuaraan(data)
    } catch(err) {
        console.log(err)
    }
    try { // lulusan
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatLulusan", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ jurusan: jurusan })
    })
    const data = await response.json()
    renderLulusan(data)
    } catch(err) {
        console.log(err)
    }
}
fetchJurusan()

// render data
const listMateri = document.getElementById("materiLihat")
const listKejuaraan = document.getElementById("kejuaraanLihat")
const listLulusan = document.getElementById("lulusanLihat")

function renderMateri(data) { // fungsi renderMateri
    console.log(data)
    if (data.length === 0) {
        return listMateri.innerHTML = `<p>Tidak ada data!</p>`
    }
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<div class="containerDataMateri"><li class="judulDataMateri"><div class="containerJudulDataMateri">${setiapNomor.materi}</div></li><button class="hapusMateriBTN hapusBTN" onclick="hapusMateri(${setiapNomor.materiID})">Hapus</button></div>` // menambah HTML berisi data materi
    }
    listMateri.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

function renderKejuaraan(data) { // fungsi renderKejuaraan
    console.log(data)
    if (data.length === 0) {
        return listKejuaraan.innerHTML = `<p>Tidak ada data!</p>`
    }
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<div class="containerDataKejuaraan"><li class="judulDatakejuaraan"><div class="containerJudulDataKejuaraan">${setiapNomor.kejuaraan}</div></li><button class="hapuskejuaraanBTN hapusBTN" onclick="hapusKejuaraan(${setiapNomor.kejuaraanID})">Hapus</button></div>` // menambah HTML berisi data kejuaraan
    }
    listKejuaraan.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

function renderLulusan(data) { // fungsi renderLulusan
    console.log(data)
    if (data.length === 0) {
        return listLulusan.innerHTML = `<p>Tidak ada data!</p>`
    }
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<div class="containerDataLulusan"><li class="judulDataLulusan"><div class="containerJudulDataLulusan">${setiapNomor.lulusan}</div></li><button class="hapusLulusanBTN hapusBTN" onclick="hapusLulusan(${setiapNomor.lulusanID})">Hapus</button></div>` // menambah HTML berisi data lulusan
    }
    listLulusan.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

// QNA
// fetch data QNA
async function lihatQna() {
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatQna")
        if (response.status === 204) {
            console.log("triggred!")
            renderQnaKosong()
        } else {
        const data = await response.json()
        renderQna(data)
        console.log(data)
        renderQna(data)
        }
    } catch(err) {
        console.log(err)
    }
}
lihatQna()

// render QnA
const outputQna = document.getElementById("outputQna")

async function renderQna(data) {
    console.log(data)
    let htmlQna = ""
    outputQna.innerHTML = ""
    for (isiData of data) {
    htmlQna += `
    <div class="qnaData">
        <p class="judul">${isiData.pertanyaan}</p>
        <div class="deskripsi">
            <p class="username">${isiData.username}</p>
        </div>
        <p class="isi">${isiData.jawaban}</p>
        <div class="hapusQnaBTN hapusBTN"><button onclick="hapusQna(${isiData.idQnA})">Hapus</button></div>
    </div>
    `
    }
    outputQna.innerHTML = htmlQna
}

function renderQnaKosong() {
    outputQna.innerHTML = "Tidak ada data!"
}

// hapus QnA 
async function hapusQna(id) {
    try {
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/hapusQna", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ id: id })
        })
        const data = await response.json()
        console.log(data)
        lihatQna()
    } catch(err) {
        console.log(err)
    }
}

// tambah QnA

async function postQna() {
    const judul = document.getElementById("pertanyaan")
    const isi = document.getElementById("jawaban")
    const warning = document.getElementById("qnaWarning")
    const success = document.getElementById("qnaSuccess")
    const gagal = document.getElementById("qnaGagal")
    const kelebihan = document.getElementById("qnaKelebihan")
    success.style.display = "none"
    gagal.style.display = "none"
    warning.style.display = "none"
    kelebihan.style.display = "none"
    if (judul.value && isi.value) { // cek kalau input sudah ada isinya
        if (judul.value.length >= 255) { 
            console.log("Judul terlalu panjang") // dbg
            kelebihan.style.display = "block"

        } else {
            console.log(`${judul.value} ${isi.value}`) //dbg
            warning.style.display = "none" // set warning false

            try {   // mintak data backend
                const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/tambahQna", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ pertanyaan: judul.value, jawaban: isi.value })
                })
                const json = await response.json()
                console.log(json)
                success.style.display = "block"
                lihatQna()
            } catch(err) {
                console.log(err)
                warning.style.display = "block"
            }
        }
    } else {
        console.log("no value") // dbg
        warning.style.display = "block" // set warning true
    }
}

// validasi Gambar
const kepsekInput = document.getElementById("kepsek")
kepsekInput.addEventListener('change', () => {
    const warningMsg = document.getElementById('imgWarning')
    warningMsg.style.display = 'none'; // Reset warning
    warningMsg.textContent = '';
    const file = kepsekInput.files[0];
    if (!file) return;

    if (file.type !== 'image/png') {
        warningMsg.style.display = 'block';
        warningMsg.textContent = 'Hanya file PNG yang diizinkan!';
        kepsekInput.value = '';
        return;
    }
})

