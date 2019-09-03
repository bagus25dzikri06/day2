//Mengamati deret geometri
function tentukanDeretGeometri(arr) {
   for (var angka = 0; angka < arr.length; angka++) {
      var bagi = arr[angka + 1] / arr[angka]
      if (arr[angka + 2] / arr[angka + 1] == bagi) {
         return true
      } else {
         return false
      }
   }
}
