/* Perkalian dan pembagian unik */
function perkalianUnik(arr) {
   var hasilKali = 1

   for (var angka = 0; angka < arr.length; angka++) {
       hasilKali = hasilKali * arr[angka]
   }

   for (var angka = 0; angka < arr.length; angka++) {
       arr[angka] = hasilKali / arr[angka]
   }

   return arr
}
