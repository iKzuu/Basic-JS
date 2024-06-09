// let player = prompt('Selamat Datang di Suit Jawa \n (gajah,semut,orang)');


const pilihan = ['gajah', 'semut', 'orang'];

// var rand = Math.random();
let computer = Math.random();

if (computer < 0.34) {
    computer = pilihan[0];
} else if (computer >= 0.34 && computer < 0.67) {
    computer = pilihan[1];
} else {
    computer = pilihan[2];
}

console.log(computer);