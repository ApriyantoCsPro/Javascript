//Syncronous Callback (Sebuah function yang parameternya adalah function)

// contoh1
// function tampilPesan(Callback) {
//     const nama = prompt("Masukan nama :")
//     Callback(nama)
// }
// tampilPesan(nama => alert(`Halo ${nama}`))

// contoh2
// const mhs = [
//     {
//         nama: "Apri",
//         umur: 20
//     },
//     {
//         nama: "Yanto",
//         umur: 21
//     },
//     {
//         nama: "Abdul Karim Syamil",
//         umur: 22
//     }
// ]

// console.log("Mulai")
// mhs.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date()
//     }
//     console.log(m.nama)
// })
// console.log("Selesai")  //Ini tidak akan di proses sampai loop nya selesai
