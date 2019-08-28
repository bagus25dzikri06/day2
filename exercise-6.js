/*Angka Palindrom*/
function angkaPalindrom(num) {
   var angka = num + 1
   var palindromNum = ''

   while (true) {
      var n = String(angka)
      angkaPalindrome = n.split('').reverse().join('')

      if (angka === Number(angkaPalindrome)) {
         return angka
      } else {
         angka++
      }
   }
}
