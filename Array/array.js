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

var nama = ["Anang", "Setiaji", "iKzuu", "Setiajoss", "Kazuma"];
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
// var arr2 = arr.slice(1,4);

// splice = menyambung / menambal / menyisipkan sebuah elemen di tengah-tengah array
// arr.splice(2, 0, 'Setiajoss')
// splice(indexAwal, yangDiHapusBerapa(opsional), elemenbaru1, elemenbaru2, dst...)

// 5. foreach
// var angka = [1,2,3,4,5,6,7,8];

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) { // secara umum sama lah kek for tapi lebih simpel gitu cuy
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 6. map : mengembalikan nilai array

// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });

// console.log(angka2.join('-'));

// 7. sort : mengurutkan isi array
// var angka = [1,10,2,20,5,3,6,8,4,7];

// console.log(angka.join('-')); // belum urut

// angka.sort(function (a,b) { // function untuk mengurutkan juka array mu seperti ini coy [1,2,10,5,20,3,6,8,4]
//     return a-b; // jika tidak menggunakan maka akan tampilnya begini -> 1-10-2-20-3-4-5-6-7-8-9
// });

// console.log(angka.join('-')); // sudah urut coy

// 8. filter : mengembalikan banyak nilai
var angka = [1,10,2,20,5,3,6,8,4,7];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join('-'));

// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));
