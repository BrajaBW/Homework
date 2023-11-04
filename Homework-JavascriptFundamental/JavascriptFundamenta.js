// SOAL NOMOR 1 


let suhuAir = 501
if (suhuAir <= 0 && -100){
    suhuAir = "BEKU"
} else if (suhuAir >= 1 &&  suhuAir<= 100) {
    suhuAir = "Cair"
} else if (suhuAir >= 101 && suhuAir<=500){
    suhuAir = "Uap"
} else {
    suhuAir = "TIDAK TAHU"
}
console.log(suhuAir)




//SOAL NOMOR 2
let jenisPlatNomor = "hitam"
let jenisKendaraan = "mobil"
let cC = 1501
let bbm = jenisPlatNomor == "kuning" || jenisKendaraan == "motor" ? "Subsidi"  :  cC <= 1500 ? "Pertamax" : "Pertamax Turbo"
console.log(bbm)


