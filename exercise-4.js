/* Built-in-Function pada Array */
function dataHandling2(biodata) {
  //Menampilkan array data orang
  console.log(biodata)

  //Menampilkan bulan kelahiran
  var tanggal = biodata[3].split("/")
  switch (tanggal[1]) {
     case '01':
        console.log('Januari')
        break;
     case '02':
        console.log('Februari')
        break;
     case '03':
        console.log('Maret')
        break;
     case '04':
        console.log('April')
        break;
     case '05':
        console.log('Mei')
        break;
     case '06':
        console.log('Juni')
        break;
     case '07':
        console.log('Juli')
        break;
     case '08':
        console.log('Agustus')
        break;
     case '09':
        console.log('September')
        break;
     case '10':
        console.log('Oktober')
        break;
     case '11':
        console.log('November')
        break;
     case '12':
        console.log('Desember')
        break;
     default:
        break;
  }
  
  //Menampilkan array tanggal kelahiran secara kelahiran secara descending
  var tanggal1 = tanggal.sort(function(value1, value2) {
     return value1 < value2
  })
  console.log(tanggal1)
  
  //Menampilkan tanggal kelahiran dengan tanda "-"
  var tanggal2 = biodata[3].split("/")
  console.log(tanggal2.join("-"))

  //Menampilkan nama
  console.log(biodata[1])
}
