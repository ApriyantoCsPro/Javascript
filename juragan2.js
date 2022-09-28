let jumlahAngkot = 10;
let angkotBeroprasi = 6;

for(let angkot = 1; angkot <= jumlahAngkot; angkot++) {
    if(angkot <= angkotBeroprasi && angkot !== 5){
        console.log("Angkot no." + angkot + " beroprasi dengan baik!")
    }else if(angkot === 8 || angkot === 10 || angkot === 5) {
        console.log("Angkot no." + angkot + " Sedang lembur.")
    }else {
        console.log("Angkot no." + angkot + " Sedang tidak beroprasi.")
    }
}