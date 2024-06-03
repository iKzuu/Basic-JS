let nomor = 1;
let jumlah = 10;
let beroperasi = 6;
let lembur = 8;

for (nomor; nomor <= jumlah; nomor++) {
    if(nomor <= beroperasi) {
        console.log('Angkot No. ' + nomor + ' sedang beroperasi');
    } else if (nomor === lembur) {
        console.log('Angkot No. ' + nomor + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + nomor + ' sedang tidak beroperasi');
    }
}