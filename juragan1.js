let angkot = 1;
let jumlahAngkot = 10;
let angkotBeroprasi = 6;

while(angkot <= angkotBeroprasi) {
    console.log("Angkot no." + angkot + " beroprasi dengan baik!")
    
angkot++
}

for(let angkot = angkotBeroprasi +1; angkot <= jumlahAngkot; angkot++) {
    console.log("Angkot no." + angkot + " Sedang tidak beroprasi.")
}