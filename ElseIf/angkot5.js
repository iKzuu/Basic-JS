let nomor = 1;
let jumlah = 10;
let beroperasi = 6;

for (nomor; nomor <= jumlah; nomor++) {
    if(nomor <= beroperasi) {
        console.log('Angkot No. ' + nomor + ' sedang beroperasi');
    } else if(nomor === 8 || nomor === 10) {
        console.log('Angkot No. ' + nomor + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + nomor + ' sedang tidak beroperasi');
    }
}