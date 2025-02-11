function cekAngka(angka) {
    if (angka % 2 == 0){
        return "Genap"
    } else {
        return "Ganjil"
    }
}

console.log(`10 adalah bilangan ${cekAngka(10)}`);
console.log(`11 adalah bilangan ${cekAngka(11)}`);