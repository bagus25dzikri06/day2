/**
Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc ( dari terbesar ke terkecil ) nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

ARRAY nilai = []
SORT nilai -> FUNCTION (nilai1, nilai2) {RETURN nilai1 < nilai2}
if ((nilai[index] <= 100) && (nilai[index] >= 80)) {
   nilai[index] = A
} else if ((nilai[index] < 80) && (nilai[index] >= 65)) {
   nilai[index] = B
} else if ((nilai[index] < 65) && (nilai[index] >= 50)) {
   nilai[index] = C
} else if ((nilai[index] < 50) && (nilai[index] >= 35)) {
   nilai[index] = D
} else if ((nilai[index] < 35) && (nilai[index] >= 0)) {
   nilai[index] = E
} else {
   nilai[index] = invalid
}
