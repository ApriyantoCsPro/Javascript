// const person = {
//     firstName: "Apri",
//     lastName: "Yanto",
//     address: {
//         street: "Jl.Tamer",
//         city: "Jakarta",
//         country: "Indonesia"
//     },
//     hobby: "Nonton Film",
//     noHp: 085711703073
// };

// let {firstName, lastName, address, ...others} = person; 

// console.log(firstName)
// console.log(lastName)
// console.log(address)
// console.log(others)

const mhs1 = {
    nama : ' Sandhika Galih ' ,
    umur : 33 ,
    email : ' sandhikagalih@unpas.ac.id ' ,
    nilai : {
        tugas : 80 ,
        uts : 85,
        uas : 75
  }
}


function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`
}

console.log(cetakMhs(mhs1))

// for (const m in mhs1) {
//     console.log(m)
// }

const {nama, ...myDetail} = mhs1    //Rest Parameter/Argument
console.log(myDetail)
{
console.log("Satu")
setTimeout(() => {
    console.log("Dua")
}, 5000);
console.log("Tiga")
}