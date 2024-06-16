// membuat Object angkot
function Angkot(sopir, penumpang, trayek, kas) {
    this.sopir = sopir;
    this.penumpang = penumpang;
    this.trayek = trayek;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for(let x = 0; x < this.penumpang.length; x++) {
                if(this.penumpang[x] === namaPenumpang) {
                    console.log(`${namaPenumpang} Sudah ada di dalam angkot well`);
                    return this.penumpang;
                } else if ( x == this.penumpang.length -1 ) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                } else if (this.penumpang[x] === undefined) {
                    this.penumpang[x] = namaPenumpang;
                    return this.penumpang;
                }
            }
        }
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0){
            alert('Angkot masih kosong!');
            return false;
        }

        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] === namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (i == this.penumpang.length -1) {
                console.log(`${namaPenumpang} Tidak ada di dalam angkot well`);
                return this.penumpang;
            }
        }
    }
}

angkot1 = new Angkot('Anang Setiaji', [], ['Ngasem', 'Colomadu', 'Surakarta'], 0);
angkot2 = new Angkot('iKzuu', [], ['Ngasem', 'Kartasura', 'Solo'], 0);
