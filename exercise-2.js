//Mengakses Nilai dalam Suatu Array
function balikString(kataKalimat) {
   var strTerbalik = ''
   for (var angka = kataKalimat.length - 1; angka >= 0; angka--) {
      strTerbalik =  strTerbalik + kataKalimat[angka]
   }
   console.log(strTerbalik)
}
