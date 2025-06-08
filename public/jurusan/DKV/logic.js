const menuBTN = document.querySelector("#navbarExtendBTN"); // Navbar : mengambil elemen tombol menu
const menu = document.querySelector("#navbarExtended"); // Navbar : mengambil elemen menu
const jurusanMobile = document.querySelector(".jurusanJudul")
const jurusanDropdownMobile = document.querySelector(".dropdownMobile")

let isOpen = false // Navbar : status menu (open/close)
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

jurusanMobile.addEventListener("click", dropdownJurusan)

let isJurusanOpen = false
function dropdownJurusan() {
    if (!isJurusanOpen) {
        jurusanDropdownMobile.style.display = "flex"
        isJurusanOpen = true
    } else {
        jurusanDropdownMobile.style.display = "none"
        isJurusanOpen = false
    }
}

jurusan = "DKV" // isi jurusan yang dituju disini, backend menerima data berjudul "PPLG" / "TJKT" / "DKV" / "PS" / "LK"
const listMateri = document.getElementById("materi")  // Buat tag ol di html dan berikan id nya disini
const listKejuaraan = document.getElementById("kejuaraan") // Buat tag ol di html dan berikan id nya disini
const listLulusan = document.getElementById("lulusan") // Buat tag ol di html dan berikan id nya disini

async function fetchBackend() { // fungsi pengambilan data dari backend
    try {  // mencoba ambil data materi ke backend
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatMateri", { // ngirim sinyal ke backend dengan endpoint /lihatMateri
            method: "POST",  // menggunakan metode POST karena sinyal berisi pesan
            headers: {
                "Content-type": "application/json", // deklarasi bentuk pesan yaitu JSON
            },
            body: JSON.stringify({ jurusan: jurusan }) // pesan <- bentuk data JSON yang berisi jurusan yang sudah di ketik diatas
        })
        const data = await response.json()  // karena response backend ngasih dalam bentuk JSON, jadi harus di buka dulu pakai fungsi JSON()
        renderMateri(data) // mengeksekusi fungi renderMateri serta memberikan data nya
    } catch(err) {  // jika ada masalah, bakal eksekusi kode block dibawah
        console.log("whoops, kode block error di percobaan ambil data materi telah dijalankan, mungkin backend mati")
        console.log(err)
    }

    try {  // mencoba ambil data kejuaraan ke backend
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatKejuaraan", { // ngirim sinyal ke backend dengan endpoint /lihatKejuaraan
            method: "POST",  // menggunakan metode POST karena sinyal berisi pesan
            headers: {
                "Content-type": "application/json", // deklarasi bentuk pesan yaitu JSON
            },
            body: JSON.stringify({ jurusan: jurusan }) // pesan <- bentuk data JSON yang berisi jurusan yang sudah di ketik diatas
        })
        const data = await response.json()  // karena response backend ngasih dalam bentuk JSON, jadi harus di buka dulu pakai fungsi JSON()
        console.log(data[0].kejuaraan)
        renderKejuaraan(data) //  mengeksekusi fungi renderKejuaraan serta memberikan data nya
    } catch(err) {  // jika ada masalah, bakal eksekusi kode block dibawah
        console.log("whoops, kode block error di percobaan ambil data kejuaraan telah dijalankan, mungkin backend mati")
        console.log(err)
    }

    try {  // mencoba ambil data lulusan ke backend
        const response = await fetch("https://vqknzx26-3000.asse.devtunnels.ms/lihatLulusan", { // ngirim sinyal ke backend dengan endpoint /lihatLulusan
            method: "POST",  // menggunakan metode POST karena sinyal berisi pesan
            headers: {
                "Content-type": "application/json", // deklarasi bentuk pesan yaitu JSON
            },
            body: JSON.stringify({ jurusan: jurusan }) // pesan <- bentuk data JSON yang berisi jurusan yang sudah di ketik diatas
        })
        const data = await response.json()  // karena response backend ngasih dalam bentuk JSON, jadi harus di buka dulu pakai fungsi JSON()
        renderLulusan(data) // mengeksekusi fungi renderLulusan serta memberikan data nya
    } catch(err) {  // jika ada masalah, bakal eksekusi kode block dibawah
        console.log("whoops, kode block error di percobaan ambil data materi telah dijalankan, mungkin backend mati")
        console.log(err)
    }
}

function renderMateri(data) { // fungsi renderMateri
    console.log(data)
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<li>${setiapNomor.materi}</li>` // menambah HTML berisi data materi
    }
    listMateri.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

function renderKejuaraan(data) { // fungsi renderKejuaraan
    console.log(data)
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<li>${setiapNomor.kejuaraan}</li>` // menambah HTML berisi data kejuaraan
    }
    listKejuaraan.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

function renderLulusan(data) { // fungsi renderLulusan
    console.log(data)
    let list = "" // deklarasi tempat list untuk diisi dengan html
    for (setiapNomor of data) { // metode pengulangan dilakukan untuk setiap data
        list += `<li>${setiapNomor.lulusan}</li>` // menambah HTML berisi data lulusan
    }
    listLulusan.innerHTML = list // menambah div list materi dengan list hasil pengulangan
}

fetchBackend() // inisiasi fungsi fetchBackend dari awal
