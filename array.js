let hari = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Monday"];

//Menambah elemen ke akhir array
hari.push("Libur");

//Menampilkan semua elemen array
hari.forEach((item, index) => {
    console.log(`Hari ke-${index + 1}: ${item}`);
});