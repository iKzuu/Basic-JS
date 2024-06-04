function tampilAngka(n) {
    if( n === 0 ){ // ini adalah base case untuk menghentikan looping rekursif :)
        return;
    }
    console.log(n);
    tampilAngka(n-1); // recursive call
}


tampilAngka(10);
//rekursif adalah fungsi yang dapat memanggil dirinya sendiri.