/* Mencari pasangan bilangan terbesar dalam suatu bilangan */
function pasanganBilangan(num) {
   var himpunanBilPasangan = []
   var stringAngka = num.toString()

   for (var i = 0; i < stringAngka.length - 1; i++) {
      var pasanganBil = stringAngka[i] + stringAngka[i + 1]
      var bilPasangan = Number(pasanganBil)
      himpunanBilPasangan.push(bilPasangan)
   }

   himpunanBilPasangan.sort()
   return himpunanBilPasangan[himpunanBilPasangan.length - 1]
}
