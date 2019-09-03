//Mencari jarak target terdekat
function targetTerdekat(arr) {
   var jarak = arr.indexOf('x') - arr.indexOf('y')

   if (jarak > 0) {
      return jarak
   } else {
      return jarak + (arr.length - 1)
   }
}
