let tanya = true;

while ( tanya ) {

    // menangkap pilihan player
    let p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    let comp = Math.random();

    if ( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ){
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    let hasil = '';
    // menentukan rules
    if ( p == comp ) {
        hasil = alert('Seri');
    } else if( p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'orang') {
        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'semut') {
        hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukkan pilihan yang salah / tidak ada!'
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('Main Lagi?');
}

alert('terimakasih sudah bermain :)')