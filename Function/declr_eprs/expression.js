// function declaration

// function call
tampilNama('John Doe'); //pemanggilan function dec. di atas function

function tampilNama(nama){ // pemanggilan function declaration bisa berada di bawah maupun di atas function
    alert('Hallo ' + nama)
}

// function call
// tampilNama('John Doe'); // pemanggilan funtion dec. di bawah function

// function expression harus di definisikan terlebih dahulu sebelum di panggil
let tampilNamaKu = function (nama) {
    alert('Hallo ' + nama)
}

// function call
tampilNamaKu('Anang')