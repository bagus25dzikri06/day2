//Mencari rata-rata
function cariRata(arr) {
   var jumlah = 0
   
   for (var angka = 0; angka < arr.length; angka++) {
       jumlah = jumlah + arr[angka]
   }

   return jumlah / arr.length
}
