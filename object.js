let buku = {
    judul: "Belajar JavaScript",
    penulis: "Gilang",
    tahun: 2025,
    cetakInfo: function() {
        console.log(`${this.judul} ditulis oleh ${this.penulis} pada tahun ${this.tahun}.`)
    }
};

buku.cetakInfo();