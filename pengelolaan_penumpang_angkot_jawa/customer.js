let penumpang = ['Anang', undefined, 'Setiaji'];

let tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // menambah penumpang pada awal array
        penumpang.push(namaPenumpang);
        // kembalikan nilai & keluar function
        return penumpang;
    } else {
        // menelusuri seluruh kursi
        for (let i = 0; i < penumpang.length; i++) {
            // ada kursi kosong
            if (penumpang[i] == undefined) {
                // menambahkan penumpang ke kursi tersebut
                penumpang[i] = namaPenumpang;
                return penumpang;             
            } else if (penumpang[i] == namaPenumpang) { // jika nama penumpang sama
                console.log(`${namaPenumpang} sudah ada di dalam angkot!`); // muncul ini coy
                return penumpang;
            } else if (i == penumpang.length - 1){ // jika seluruh kursi terisi secara berurutan
                // menambahkan penumpang ke kursi sesuai urutan terakhir
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong ndlogo!');
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if ( i == penumpang.length - 1) {
                console.log(`${namaPenumpang} tidak ada di dalam angkot!`);
                return penumpang;
            }
        }
    }
    return penumpang;
}