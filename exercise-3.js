/* Melakukan Looping Data Array */
function dataHandling(biodata) {
   for (var i = 0; i < biodata.length; i++) {
      for (var j = 0; i < biodata.length; i++) {
         console.log('Nomor ID: ' + biodata[i][j])
         j += 1
         console.log('Nama Lengkap: ' + biodata[i][j])
         j += 2
         console.log('TTL: ' + biodata[i][j] + biodata[i][j + 1])
         j += 1
         console.log('Hobi: ' + biodata[i][j])
      }
      console.log(' ')
   }
}
