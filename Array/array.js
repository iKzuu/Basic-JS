// manipulasi array

// 1. menambah isi array

// var arr = [];
// arr[0] = "Anang";
// arr[1] = "Setiaji";
// arr[2] = "iKzuu";

// console.log(arr);

// 2. menghapus isi array

// var arr = ["Anang", "Setiaji", "iKzuu"];
// arr[1] = undefined;
// console.log(arr)

// 3. menampilkan isi array

// var arr = ["Anang", "Setiaji", "iKzuu", "Setiajoss"];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke- ' + (i+1) + ' : ' + arr[i])
// }

//method pada array

var arr = ['Anang', 'Setiaji', 'iKzuu', 'Setiajoss', 'Kazuma'];
// 1. join : merubah isi array menjadi string menampilkan secara default
// console.log(arr.join());

// 2. push & pop

// push = mendorong atau memasukkan elemen baru ke dalam array
// arr.push('Setiajoss');

// pop = menghilangkan elemen terakhir dari sebuah array
// arr.pop();

// 3. unshift & shift

// unshift = menambahkan elemen baru di awal array
// arr.unshift('Wadawa');

// shift = menghilangkan elemen pertama dalam array
// arr.shift();

// 4. slice & splice
// slice = digunakan ketika ingin mengambil beberapa bagian pada array untuk menjadi array yang baru
// slice(awal,akhir);
var arr2 = arr.slice(1,4);

// splice = menyambung / menambal / menyisipkan sebuah elemen di tengah-tengah array
// arr.splice(2, 0, 'Setiajoss')
// splice(indexAwal, yangDiHapusBerapa(opsional), elemenbaru1, elemenbaru2, dst...)

console.log(arr.join(' - '));
console.log(arr2.join(' - '));