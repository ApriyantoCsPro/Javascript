function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir,
    this.trayek = trayek,
    this.penumpang = penumpang,
    this.kas = kas,

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    },
    
    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log("Angkot masih kosong")
            return false
        }else {
            for(let i = 0; i <= penumpang.length; i++) {
                if(this.penumpang[i] === namaPenumpang) {
                    this.penumpang[i] = undefined
                    this.kas += bayar;
                    return this.penumpang;
                } else if(this.penumpang[i] !== namaPenumpang) {
                    console.log(namaPenumpang, "Tidak ada di angkot.")
                    // return this.penumpang;
                    return false;
                }
            }
            
            
            
            // penumpang.every(function(e,i) {
            //     if(e == namaPenumpang) {
            //         penumpang.splice(penumpang[i], 1)
            //         this.kas += bayar
            //         return false;
            //     } else if(i == penumpang.length -1) {
            //         console.log(namaPenumpang, "Tidak ada di angkot")
            //         return false;
            //     }
            //     return true
            // })
            // return this.penumpang;
        }
        
    }
}

let angkot1 = new Angkot("Andri", ["Jakarta, Bandung"], [], 0);
