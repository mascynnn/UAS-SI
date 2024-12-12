function filterBeasiswa() {
    const kategori = document.getElementById('filter-kategori').value;
    const cards = document.querySelectorAll('.beasiswa-cards .card');

    cards.forEach(card => {
        if (!kategori || card.dataset.kategori === kategori) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}


        // Mengambil parameter 'id' dari URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        // Data beasiswa dengan link pendaftaran yang berbeda untuk setiap beasiswa
        const beasiswaData = {
            1: {
                title: "Beasiswa YBM BRI",
                description: "Beasiswa ini untuk mahasiswa semester 1 dan menawarkan bantuan hingga 100%. Beasiswa ini bertujuan untuk membantu mahasiswa baru dalam menyelesaikan pendidikan tanpa terbebani biaya kuliah.",
                provider: "Universitas Lampung dan Lembaga Pendidikan Mitra",
                requirements: "IPK minimal 3.0, mengisi formulir pendaftaran, melampirkan transkrip nilai, dan dokumen pendukung lainnya.",
                benefits: "Beasiswa ini mencakup biaya kuliah penuh, uang saku bulanan, serta kesempatan untuk mengikuti program magang di perusahaan mitra Universitas Lampung.",
                application: "Pendaftaran dilakukan secara online melalui portal resmi Unila. Lengkapi formulir aplikasi dan unggah dokumen yang diperlukan.",
                registerLink: "https://ybmbrilian.id/beasiswa/",  
                image: "img/ybm.png"
            },
            2: {
                title: "Beasiswa Unggulan S2",
                description: "Beasiswa ini untuk mahasiswa semester 2 yang berprestasi di bidang akademik. Beasiswa ini mendukung mahasiswa untuk fokus dalam studi tanpa khawatir dengan biaya pendidikan.",
                provider: "Universitas Lampung dan Pemerintah Daerah",
                requirements: "Memiliki IPK 3.5 ke atas, aktif dalam kegiatan ekstrakurikuler, melampirkan surat rekomendasi dosen dan bukti prestasi akademik.",
                benefits: "Biaya kuliah 50% ditanggung, dana untuk penelitian, dan akses ke pelatihan kepemimpinan serta pengembangan diri.",
                application: "Proses pendaftaran dilakukan melalui email resmi dengan melampirkan dokumen persyaratan lengkap. Pastikan untuk mengikuti tes wawancara.",
                registerLink: "https://beasiswaunggulan.kemdikbud.go.id/",  
                image: "img/unggulan.png"
            },
            3: {
                title: "Beasiswa Diploma Kemdikbud",
                description: "Dukungan finansial untuk mahasiswa S3 kurang mampu. Beasiswa ini bertujuan untuk meringankan beban biaya pendidikan bagi mahasiswa yang membutuhkan.",
                provider: "Pemerintah Provinsi Lampung",
                requirements: "Surat keterangan tidak mampu, melampirkan fotokopi KTP, KK, dan dokumen pendukung lainnya.",
                benefits: "Beasiswa ini mencakup biaya kuliah penuh, uang saku bulanan untuk kebutuhan hidup, serta bantuan lainnya untuk mahasiswa yang membutuhkan.",
                application: "Pendaftaran dapat dilakukan melalui portal online Universitas Lampung. Unggah semua dokumen yang diperlukan dan isi formulir aplikasi dengan lengkap.",
                registerLink: "https://beasiswa.vokasi.kemdikbud.go.id/",  
                image: "img/diploma.png"
            },
            4: {
                title: "Beasiswa IDP Education",
                description: "Dukungan finansial untuk mahasiswa semester 3 kurang mampu. Beasiswa ini bertujuan untuk meringankan beban biaya pendidikan bagi mahasiswa yang membutuhkan.",
                provider: "Pemerintah Provinsi Lampung",
                requirements: "Surat keterangan tidak mampu, melampirkan fotokopi KTP, KK, dan dokumen pendukung lainnya.",
                benefits: "Beasiswa ini mencakup biaya kuliah penuh, uang saku bulanan untuk kebutuhan hidup, serta bantuan lainnya untuk mahasiswa yang membutuhkan.",
                application: "Pendaftaran dapat dilakukan melalui portal online Universitas Lampung. Unggah semua dokumen yang diperlukan dan isi formulir aplikasi dengan lengkap.",
                registerLink: "https://www.idp.com/indonesia/study-abroad/scholarships/",  
                image: "img/idp.png"
            },
            // Tambahkan beasiswa lainnya sesuai kebutuhan
        };

        // Menampilkan detail beasiswa berdasarkan id
        if (id && beasiswaData[id]) {
            const beasiswa = beasiswaData[id];
            document.getElementById('beasiswa-title').innerText = beasiswa.title;
            document.getElementById('beasiswa-description').innerText = beasiswa.description;
            document.getElementById('beasiswa-provider').innerText = beasiswa.provider;
            document.getElementById('beasiswa-requirements').innerText = beasiswa.requirements;
            document.getElementById('beasiswa-benefits').innerText = beasiswa.benefits;
            document.getElementById('beasiswa-application').innerText = beasiswa.application;
            document.getElementById('beasiswa-image').src = beasiswa.image;
            document.getElementById('beasiswa-register-link').href = beasiswa.registerLink; // Pastikan link pendaftaran diperbarui sesuai dengan ID beasiswa
        } else {
            document.getElementById('beasiswa-title').innerText = "Beasiswa Tidak Ditemukan";
            document.getElementById('beasiswa-description').innerText = "Mohon maaf, beasiswa yang Anda cari tidak tersedia.";
        }