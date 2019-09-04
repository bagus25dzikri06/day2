/* Mengelompokkan Angka */
function mengelompokkanAngka(arr) {
   var bilanganGanjil = []
   var bilanganGenap = []
   var bilKelTiga = []

   for (var angka = 0; angka < arr.length; angka++) {
      //Bilangan ganjil dan genap
      if (arr[angka] % 2 == 0) {
         bilanganGenap.push(arr[angka])
      } else {
         bilanganGanjil.push(arr[angka])
      }

      //Bilangan kelipatan 3
      if (arr[angka] % 3 == 0) {
         bilKelTiga.push(arr[angka])
      }
   }
   
   var grupAngka = [bilanganGenap, bilanganGanjil, bilKelTiga]
   return grupAngka
}
