var bahanMasak = ['jengkol', 'garam', 'santan', 'penyedap']

//1. Tuang kecap setelah garam
bahanMasak.splice(2, 0, 'kecap')

/*2. Tuang minyak goreng setelah santan */
bahanMasak.splice(4, 0, 'minyak goreng')

//3. Ganti garam dengan micin
bahanMasak.splice(1, 1, 'micin')

/*4. Indeks ke-3 bahanMasak */
console.log(bahanMasak[3])

