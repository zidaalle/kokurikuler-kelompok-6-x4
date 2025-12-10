// script.js

function tampilkanDetail() {
    const namaWebsite = document.getElementById('nama-website');
    const tagline = document.querySelector('.tagline');
    const kontenDetail = document.getElementById('konten-detail');
    const header = document.querySelector('header');

    // 1. Tampilkan Konten Detail
    if (kontenDetail.classList.contains('tersembunyi')) {
        kontenDetail.classList.remove('tersembunyi');
        
        // 2. Ubah tampilan header (opsional: membuatnya lebih kecil)
        header.style.padding = '20px';
        namaWebsite.style.fontSize = '1.5em';
        tagline.style.display = 'none';

        // 3. Scroll ke bagian konten detail
        kontenDetail.scrollIntoView({ behavior: 'smooth' });
    }
    // Jika sudah ditampilkan, klik tidak melakukan apa-apa atau bisa dibuat toggle kembali
    // else {
    //     kontenDetail.classList.add('tersembunyi');
    //     header.style.padding = '40px 20px';
    //     namaWebsite.style.fontSize = '2.5em';
    //     tagline.style.display = 'block';
    // }
}