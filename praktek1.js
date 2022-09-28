// //Ambil semua element video
// const videos = Array.from(document.querySelectorAll("[data-duration]"))
// // console.log(videos)

// //pilih hanya yang javascript
// let javascript = videos.filter(video => video.textContent.includes('JavaScript'))
// //(cari/filter video, yang didalam nya, terdapat javascript)


// //ambil durasi masing2 video
// .map(item => item.dataset.duration)


// //ubah durasi menjadi float, ubah menit menjadi detik
// .map(waktu => {
//     //10:30 -> [10, 30] = split
//     const parts = waktu.split(':').map(part => parseFloat(part))
//     return (parts[0] * 60) + parts[1]
// })


// //jumlahkan semua detik
//  .reduce((kalkulatorPenyatu, isiArray) => kalkulatorPenyatu + isiArray)
//  // kalkulatorPenyatu = total || isiArray = detik



// //ubah formatnya menjadi jam menit detik
// const jam = Math.floor(javascript / 3600)
// javascript = javascript - jam * 3600
// const menit = Math.floor(javascript / 60)
// const detik = javascript - menit * 60



// //simpan di DOM
// const totalDurasi = document.querySelector('.total-durasi')
// totalDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

// const jumlahVideo = videos.filter(video => video.textContent.includes('JavaScript')).length;
// const pJumlahVideo = document.querySelector('.jumlah-video')
// pJumlahVideo.textContent = `${jumlahVideo} Video.`


// console.log(jumlahVideo)











//Ambil semua element video
const videos = Array.from(document.querySelectorAll("[data-duration]"))

//pilih hanya yang javascript
let javascript = videos.filter(video => video.textContent.includes('JavaScript'))

//ambil durasi masing2 video
    .map(item => item.dataset.duration)

//ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part))
        return parts[0] * 60 + parts[1]
    })

//jumlahkan semua detik
    .reduce((kalkulatorPenyatu, isiArray) => kalkulatorPenyatu + isiArray)

//ubah formatnya menjadi jam menit detik
const jam = Math.floor(javascript / 3600)
javascript = javascript - jam * 3600
const menit = Math.floor(javascript / 60)
const detik = javascript - menit * 60

//simpan di DOM
const totalDurasi = document.querySelector('.total-durasi')
totalDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`

const jumlahVideo = videos.filter(video => video.textContent.includes('JavaScript')).length;
const pJumlahVideo = document.querySelector('.jumlah-video')
pJumlahVideo.textContent = `${jumlahVideo} Video.`

// console.log(menit)





























