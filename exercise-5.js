//Kata Palindrom
function palindrome(kata) {
   var kataPalindrom = ''
   for (var angka = kata.length; angka >= 0; angka--) {
       kataPalindrom = kataPalindrom + kata[angka]
   }

   if (kataPalindrom === kata) {
      return true
   } else {
      return false
   }
}
