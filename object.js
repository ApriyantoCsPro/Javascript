// Cara membuat object pada Javascript

// 1. Object Literal
// let mahasiswa = {
//     nama: "Apriyanto",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`)
//     }
// }


// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${mahasiswa.nama}, selamat makan!`)
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${mahasiswa.nama}, selamat bermain!`)
//     }
//     return mahasiswa;
// }

// let apriyanto = Mahasiswa("Apriyanto", 10);
// let doddy = Mahasiswa("Doddy", 10);



// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`)
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!`)
//     }
// }

// let apri = new Mahasiswa("Apriyanto", 10)


// 4. Object.create
// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype);  yg sebenernya terjadi(otomatis dibuat)
//     this.nama = nama,
//     this.energi = energi
//     // return this;         tidak perlu return 
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi
//     return `Halo ${this.nama}, selamat makan!`
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam
//     return `Halo ${this.nama}, selamat bermain!`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2
//     return `Halo ${this.nama}, selamat tidur!`
// }


// Versi class
class Mahasiswa {
    constructor(nama, energi) {
        // let this = Object.create(Mahasiswa.prototype);  yg sebenernya terjadi(otomatis dibuat)
        this.nama = nama,
            this.energi = energi
        // return this;         tidak perlu return 
    }
    makan(porsi) {
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!`
    }
    main(jam) {
        this.energi -= jam
        return `Halo ${this.nama}, selamat bermain!`
    }
    tidur(jam) {
        this.energi += jam * 2
        return `Halo ${this.nama}, selamat tidur!`
    }
}

let apri = new Mahasiswa("Apriyanto", 10)