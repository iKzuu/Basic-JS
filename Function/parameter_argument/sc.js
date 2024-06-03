function tambah(a, b){ // adalah parameter
    return a + b;
}

let a = parseInt(prompt('Masukkan angka ke-1'));
let b = parseInt(prompt('Masukkan angka ke-2'));

function kali(a, b){
    return a * b;
}
let hasil = kali(tambah(a,b), tambah(a,b)); // adalah argument
console.log(hasil);