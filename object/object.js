// membuat object

// Menggunakan Object Literal

// var mhs = {
//     nama : "Anang Setiaji",
//     umur : 18,
//     email : 'anangsetiaji@gmail.com',
//     nilai : [80, 90, 88, 98, 100],
// }

// Menggunakan Function Declaration : deklarasi sekali buat object berulang-ulang
// function objectMahasiswa
// (nama, umur, email, nilai) // ini argument
// {
//     let mhs = {}; // ini object kosong
//     mhs.nama = nama; // properti di isi argument
//     mhs.umur = umur; // properti di isi argument
//     mhs.email = email; // properti di isi argument
//     mhs.nilai = nilai; // properti di isi argument
//     return mhs;
// }

// let mhs3 = objectMahasiswa('Anang', 18, 'anangsetiaji@gmail.com', [80, 90, 88, 98, 100]);
// console.log(mhs3);

// Menggunakan Constructor
// function Mahasiswa(nama, umur, email, nilai) {
//     this.nama = nama;
//     this.umur = umur;
//     this.email = email;
//     this.nilai = nilai ; // Object Constructor tanpa ada variabel dan return
// }

// pemanggilan pake new setelah =
// kalau tidak memakai "new" javascript akan menganggap kita memanggil object menggunakan function declaration
// let mhs4 = new Mahasiswa('Anang', 18, 'anangsetiaji@gmail.com', [80, 90, 88, 98, 100]);
// console.log(mhs4);

// this function declaration
// function halo() {
//     console.log(this);
//     console.log(halo);
// }
// this.halo(); // this mengembalikan object global

// this object literal
// var obj = {a : 18, nama : 'Anang'};
// obj.halo = function () {
//     console.log(this); // this mengembalikan obj
//     console.log('halo');
// }
// obj.halo(); // mengembalikan object yang bersangkutan

// this constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// mengembaalikan onject yang baru di buat