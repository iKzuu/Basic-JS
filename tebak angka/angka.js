let helath = 3;
let plyr = prompt('Masukkan satu angka dari 1-10!');
let comp = Math.floor(Math.random() * 10) + 1;

if (plyr == comp) {
    alert('Selamat! Anda Benar!, Angkanya adalah ' + comp);
} else{
    alert('Sayang sekali :( Anda Salah!, Angkanya adalah ' + comp)
}