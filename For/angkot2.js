let jumlah = 10;
let beroperasi = 6;
let nomor = 1;

while (nomor <= beroperasi) {
    console.log('Angkot No. ' + nomor + ' sedang beroperasi');
    nomor++;
}

for (nomor = beroperasi + 1; nomor <= jumlah; nomor++) {
    console.log('Angkot No. ' + nomor + ' sedang tidak beroperasi');
}