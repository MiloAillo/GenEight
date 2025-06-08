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

async function lihatBerita() {
    console.log("lihatBerita triggered!")
    try {
        const response = await fetch("/lihatBerita")
        if (response.status === 204) {
            return console.log("takde berita")
        }
        const berita = await response.json()
        renderBerita(berita)
    } catch(err) {
        console.log(err)
    }
}

const beritaBox = document.getElementById("contentBeritaBox")
function renderBerita(multiData) {
    console.log("renderBerita triggered!")
    console.log(multiData)
    list = ""
    for (data of multiData) {
        list += `<div class="contentBeritaInformation">
                    <div class="contentBeritaInformationJudul"><a href="berita/berita.html?id=${data.beritaID}">${data.judul}</a></div>
                    <div class="contentBeritaInformationDeskripsi">
                        <p class="date">${data.waktu}</p>
                        <p>|</p>
                        <p class="author">Author: ${data.username}</p>
                    </div>
                </div>`
    }
    console.log(list)
    beritaBox.innerHTML = list 
}

lihatBerita()

//redirect
const pplg = document.getElementById("pplgBTN")
const tjkt = document.getElementById("tjktBTN")
const dkv = document.getElementById("dkvBTN")
const ps = document.getElementById("psBTN")
const lk = document.getElementById("lkBTN")

pplg.addEventListener("click", () => {
    window.location.href = "/jurusan/PPLG/pplg.html"
})
tjkt.addEventListener("click", () => {
    window.location.href = "/jurusan/TJKT/tjkt.html"
})
dkv.addEventListener("click", () => {
    window.location.href = "/jurusan/DKV/dkv.html"
})
ps.addEventListener("click", () => {
    window.location.href = "/jurusan/PS/ps.html"
})
lk.addEventListener("click", () => {
    window.location.href = "/jurusan/LK/lk.html"
})
