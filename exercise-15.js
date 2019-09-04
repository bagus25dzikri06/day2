//Mengelompokkan Hewan
function groupAnimals(animals) {
    var animalSort = []
    var i = 0
    animals.sort()

    for (var angka = 0; angka < animals.length; angka++) {
        if (animalSort.length === 0) {
           animalSort.push([animals[angka]])
        } else if (animalSort.length[i][0][0] === animals[angka][0]) {
           animalSort[i].animals(hewan[angka])
        } else {
           animalSort.push([animals[angka]])
           i++
        }
    }

    return animalSort
}
