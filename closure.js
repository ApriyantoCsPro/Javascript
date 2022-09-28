function ucapSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu} -_-`)
    }
}

ucapSalam("pagi")("Shandika")

let selamatPagi = ucapSalam("pagi")
let selamatSiang = ucapSalam("siang")
let selamatMalam = ucapSalam("malam")

selamatPagi("Apri");
selamatSiang("Asep")
selamatMalam("Muslim")