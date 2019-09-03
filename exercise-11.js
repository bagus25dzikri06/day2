//Mengamati deret bilangan
function tentukanDeretBilangan(arr) {
   for (var angka = 0; angka < arr.length; angka++) {
      var selisih = arr[angka + 1] - arr[angka]
      if (arr[angka + 2] - arr[angka + 1] == selisih) {
         return true
      } else {
         return false
      }
   }
}
