var a = 1; // global scope/window scope

function tes(){ // function scope
    var b = 2;
    console.log(a); // didalam function kita dapat mengakses variable global.
}

tes();
