const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

//Mencari angka >= 3 menggunakan FOR
// const newAngka =[]
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i])
//     }
    
// }

// console.log(newAngka)


//Mencari angka >= 3 menggunakan filter
// const newAngka = angka.filter(a => a >= 3)

// console.log(newAngka)


//Map (mengubah array, dan hasilnya buat array baru)
// const newAngka = angka.map(a => a * 2);
// console.log(angka)    //tidak mengubah array aslinya
// console.log(newAngka)   //membuat arry 


//Reduce (menyatukan array baru/lama)
// const newAngka = angka.reduce((kalkulatorPenyatu, isiArray) => kalkulatorPenyatu + isiArray)
// console.log(newAngka)


//Method Chaning (menyatukan semua fungsi prototype menggunakan titik di akhir)
const hasil = angka.filter(a => a > 5)  //cari angka > 5
    .map(a => a * 3)   //kalika angka dari hasil tersebut
    .reduce((kalkulatorPenyatu, isiArray) => kalkulatorPenyatu + isiArray); // jumlahkan jadi 1 semuanya

console.log(hasil)