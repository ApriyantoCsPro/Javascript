let penumpang = []


let tambahPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else{
        penumpang.every(function(e,i) {
            if(e == undefined) {
                penumpang.splice(i, i, namaPenumpang);
                return false;
            } else if (i == penumpang.length -1) {
                penumpang.push(namaPenumpang);
                return false;
            } else if (e == namaPenumpang) {
                console.log(namaPenumpang + "sudah naik ke angkot!");
                return false;
            }
            return true;
        })
        return penumpang;
    }
};

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length <= 0) {
        console.log("Angkot kosong, Tidak ada yang bisa diturunkan!")
        return penumpang;
    } else {
        penumpang.every(function(e,i) {
            if(e == namaPenumpang) {
                // penumpang[i] = penumpang.splice(penumpang[i]);
                penumpang.splice(penumpang[i], 1)
                return false
            } else if(i == penumpang.length -1) {
                console.log(namaPenumpang, "Tidak ada di angkot")
                return false;
            }
            
            return true
        })
        return penumpang;
    }
}
// function hapusPenumpang(namaPenumpang,penumpang){
//     let x = penumpang.indexOf(namaPenumpang)
//     if (penumpang.length <= 0){
//       console.log("tidak ada penumpang");
//     } else if (x >= 0){
//       penumpang[x] = undefined;
//     } else if (x < 0) {
//       console.log ("tidak ada nama yang sesuai!");
//     }
//     return penumpang;
//   }
  