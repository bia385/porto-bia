const projects = {
     'analisis-pizza': {
        title: 'Optimasi Kinerja Operasional & Penjualan F&B berbasis Dasbor Excel',
        category: 'EXCEL',
        technologies: 'Microsoft Excel · Analisis Penjualan · Pivot Table · Rumus Excel · Grafik · Dasbor Interaktif',
        image: 'images/pizza.png',
        imageAlt: 'Dasbor analisis penjualan pizza di Microsoft Excel',
        previewTitle: 'Pratinjau dasbor penjualan pizza',
        previewCaption: 'Dasbor Excel yang merangkum KPI, pizza terlaris, tren pendapatan bulanan, serta penjualan menurut kategori dan ukuran.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Microsoft Excel (Pivot Table, Grafik, Charts, Formula)'
            },
            {
                title: 'Problem',
                description: [
                    'Soroti kebutuhan manajemen operasional gerai—seperti ketidakjelasan dalam memetakan jam/bulan sibuk (peak hours/seasons), variasi ukuran yang paling efisien, dan perencanaan bahan baku (inventory planning) akibat data transaksi yang belum terintegrasi.'
                ]
            },
            {
                title: 'Action',
                description: [
                    'Melakukan pembersihan data (data cleaning) dan pengelompokan transaksi menggunakan Pivot Table untuk memetakan parameter operasional utama (Total Revenue, Total Orders, dan Average Order Value/AOV).',
                    ' Melakukan analisis pola permintaan berdasarkan tren waktu bulanan serta distribusi kategori dan ukuran produk.',
                    'Merancang dasbor visual interaktif (Line Chart, Bar Chart, dan Slicers) sebagai alat pemantauan (monitoring tool) bagi manajemen operasional untuk mempermudah pengambilan keputusan cepat.',
                    
                ]
            },
            {
                title: 'Result',
                description: [
                    'Berhasil menghitung total pendapatan (Total Revenue $817,860.05), total volume pesanan (Total Orders 21.350), dan rata-rata nilai transaksi (AOV $38.31).',
                    'Memetakan 10 pizza terlaris (seperti The Barbecue Chicken Pizza) serta mendistribusikan kontribusi penjualan berdasarkan kategori produk dan variasi ukurannya',
                    'Mengidentifikasi fluktuasi tren pendapatan bulanan sepanjang tahun untuk menemukan bulan dengan penjualan puncak (peak) dan terendah.'
                ]
            }
        ]

    },

    'retail-analysis': {
        title: 'Retail Operational Performance & Profitability Optimization Dashboard',
        category: 'POWER BI',
        technologies: 'Power BI · Power Query · DAX · Microsoft Excel · Data Cleaning · Data Transformation · Data Visualization · KPI Development · Dashboard Development',
        description: 'Menganalisis kinerja operasional dan profitabilitas ritel berdasarkan penjualan, keuntungan, produk, pelanggan, wilayah, dan periode waktu.',
        image: 'images/retail.png',
        imageAlt: 'Dasbor kinerja bisnis ritel dengan grafik penjualan dan laba',
        previewTitle: 'Pratinjau gambar dasbor',
        previewCaption: 'Pratinjau visual dasbor kinerja ritel.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Dasbor kinerja operasional ritel untuk meninjau penjualan, keuntungan, produk, pelanggan, wilayah, dan periode waktu.'
            },
            {
                title: 'Problem',
                description: 'Evaluasi kinerja operasional ritel sering kali terjebak pada tingginya angka penjualan kotor tanpa melihat margin keuntungan dan efisiensi lini produk secara mendalam. Ketidakteraturan strategi pemberian diskon serta variasi performa antar-wilayah berpotensi memicu penurunan profitabilitas dan inefisiensi operasional. Manajemen memerlukan sistem pemantauan terstruktur untuk mengidentifikasi area yang mengalami kerugian (loss-making areas) dan menentukan prioritas perbaikan proses bisnis.'
            },
            {
                title: 'Action',
                description: [
                    'Melakukan validasi, pembersihan (data cleaning), dan transformasi data transaksi berskala besar (9.994 baris) menggunakan Power Query guna memastikan integritas data operasional.',
                    'Membangun indikator kinerja utama (KPI Development) menggunakan DAX untuk mengukur metrik inti secara presisi: total penjualan, laba bersih, jumlah pesanan, dan margin keuntungan (profit margin).',
                    'Mengeksekusi analisis komparatif performa produk, kontribusi pelanggan, dan efisiensi operasional wilayah (regional performance) untuk memetakan penyimpangan dan area berkinerja rendah.',
                    'Menganalisis korelasi operasional antara tingkat diskon (discount rate) dan margin keuntungan guna mendeteksi potensi risiko erosi profitabilitas.',
                    'Merancang dan mendelegasikan interactive dashboard di Power BI sebagai alat kontrol manajemen untuk memantau tren kinerja.',
                    
                ]
            },
            {
                title: 'Result',
                description: [
                    'Menyediakan instrumen pemantauan operasional terpusat yang memetakan kategori produk unggulan (misalnya: Technology sebagai kontributor laba tertinggi vs Furniture dengan volume tinggi namun margin ketat) serta wilayah operasional terkuat (West Region).',
                    'Mengidentifikasi secara kuantitatif bahwa penerapan diskon tinggi berkorelasi langsung dengan penurunan profitabilitas, memberikan dasar bagi manajemen untuk merevisi SOP kebijakan diskon.',
                    'Menghasilkan rekomendasi berbasis data (data-driven insights) untuk mengoptimalkan efisiensi portofolio produk, memangkas produk yang merugikan (loss-making products), dan memperketat kontrol evaluasi kinerja wilayah.'
                ]
            }
        ]

    },

    'imdb-data-cleaning': {
        title: 'Data Quality Control & Standardization Framework (IMDb Dataset)',
        category: 'Google Spreadsheet',
        technologies: 'Pembersihan Data ',
        image: 'images/IMDB.png',
        imageAlt: 'Dataset yang telah dilakukan cleaning data',
        previewTitle: 'Pratinjau gambar data tabel',
        previewCaption: 'Pratinjau dataset yang telah dibersihkan.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Dataset IMDb tahun 2019'
            },
            {
                title: 'Problem',
                description: ' Pangkalan data mentah (raw dataset) mengalami penurunan kualitas akibat duplikasi data, nilai yang hilang (missing values), serta inkonsistensi format penulisan. Dalam manajemen operasional, data yang tidak terstruktur dan beranomali memicu risiko kesalahan pengambilan keputusan (Garbage In, Garbage Out) serta memperlambat alur kerja analisis.'
            },
            {
                title: 'Action',
                description: [
                    'Mengeksekusi proses pembersihan dan perapian data secara terstruktur menggunakan kombinasi fungsi dan formula di Google Sheets.',
                    'Melakukan verifikasi dan eliminasi data ganda (duplicate removal), penanganan nilai yang hilang, serta koreksi struktur teks dan format tanggal yang tidak konsisten.',
                    'Menerapkan aturan validasi data untuk memastikan seluruh kolom memiliki format yang seragam dan bebas dari kesalahan input.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Berhasil mentransformasi data mentah yang beranomali menjadi pangkalan data yang 100% terstandardisasi, konsisten, dan bebas dari duplikasi.',
                    'Memangkas waktu persiapan data (data preparation time) dan memberikan fondasi data yang andal (high-integrity dataset) untuk mempercepat serta mengakurasi analisis operasional tingkat lanjut.'
                ]
            }
        ]

    },

    'e-commerce-sales-analysis': {
        title: 'E-Commerce Operational & Transactional Performance Analysis',
        category: 'EXCEL & SQL',
        technologies: 'Pembersihan Data · Penyiapan Data · Penyiapan Basis Data · Analisis Data Eksploratif · Analisis SQL · Visualisasi Data · Pelaporan',
        image: 'images/report 2.png',
        imageAlt: 'Gambaran umum proyek analisis penjualan perdagangan elektronik',
        previewTitle: 'Pratinjau gambar dasbor',
        previewCaption: 'Pratinjau visual gambaran umum proyek analisis penjualan perdagangan elektronik.',
        highlights: [
            {
                title: 'Projek Overview',
                description: 'Proyek ini berfokus pada analisis data transaksi e-commerce menggunakan PostgreSQL dan SQL untuk memahami kinerja penjualan, kontribusi produk dan kategori, perilaku pengeluaran pelanggan, kinerja regional, metode pembayaran, dan profitabilitas.'
            },
            {
                title: 'Problem',
                description: 'Data transaksi e-commerce yang mencakup ribuan catatan penjualan, pelanggan, wilayah, dan metode pembayaran memerlukan tata kelola pangkalan data yang terstruktur. Tanpa pengolahan basis data yang andal, manajemen operasional akan kesulitan mengevaluasi efisiensi penjualan, mendeteksi kontribusi profit per lini produk, dan memetakan performa wilayah secara akurat.'
            },
            {
                title: 'Action',
                description: [
                    'Melakukan import, strukturisasi, dan manajemen pangkalan data terhadap 5.000 catatan transaksi menggunakan PostgreSQL.',
                    'Mengeksekusi kueri SQL untuk melakukan eksplorasi data (EDA) serta menghitung metrik operasional utama (total volume penjualan, jumlah transaksi, dan rata-rata nilai transaksi).',
                    'Menganalisis parameter komparatif kinerja operasional mencakup kategori produk, efisiensi wilayah, preferensi metode pembayaran, dan marjin keuntungan.',
                    'Menyusun temuan analisis kuantitatif ke dalam pelaporan terstruktur menggunakan Microsoft PowerPoint untuk mendukung evaluasi manajemen.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Memetakan performa operasional secara presisi (total penjualan Rp533,67 juta dari 5.000 transaksi dengan rata-rata nilai transaksi sebesar Rp106.733,20).',
                    'Mengidentifikasi efisiensi kategori unggulan (seperti Home Decor sebagai kontributor penjualan tertinggi sebesar Rp57,23 juta dan Furniture sebagai penghasil keuntungan tertinggi sebesar Rp8,69 juta) serta pemetaan wilayah operasional terkuat (North Region).',
                    'Menghasilkan laporan analitis komprehensif yang memberikan landasan data bagi manajemen untuk mengevaluasi strategi penjualan dan optimalisasi portofolio produk ke depan.'
                    
                ]
            }
        ]
    },

    'kost-rental-data-analysis': {
        title: 'Property Rental Market Data Standardization & Regional Cost Benchmarking',
        category: 'EXCEL',
        technologies: 'Microsoft Excel · Data Cleaning · Data Preprocessing · Data Validation · Exploratory Data Analysis (EDA) ·Descriptive Statistics · Pivot Table · Excel Formulas · Data Visualization · Data Analysis & Interpretation · Data Reporting',
        image: 'images/report1.png',
        imageAlt: 'Pratinjau analisis data penyewaan kos',
        previewTitle: 'Pratinjau analisis penyewaan kos',
        previewCaption: 'Pratinjau visual analisis data penyewaan kos.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Analisis data daftar kos di Jabodetabek menggunakan Microsoft Excel untuk meninjau persebaran, harga sewa, dan variasi kos berdasarkan wilayah maupun jenis.'
            },
            {
                title: 'Problem',
                description: 'Pangkalan data pendaftaran penyewaan kos memiliki tingkat inkonsistensi yang tinggi, ditandai dengan format harga tidak seragam, missing values, serta struktur lokasi yang belum terstandarisasi. Ketidakteraturan data mentah ini menghambat pemetaan benchmark harga yang akurat dan menyulitkan evaluasi variansi biaya antar-wilayah.'
            },
            {
                title: 'Action',
                description: [
                    'Melakukan validasi, pembersihan (data cleaning), dan penyeragaman format data (data normalization) terhadap 2.486 catatan listing menggunakan Microsoft Excel, mencakup eliminasi duplikasi dan konversi teks harga ke bentuk numerik.',
                    'Menerapkan fungsi Pivot Table dan rumus kustom Excel untuk mengagregasi distribusi listing, memetakan rata-rata biaya sewa, dan mengelompokkan variasi properti berdasarkan wilayah serta kategori.',
                    'Mengeksekusi analisis statistik deskriptif untuk mengidentifikasi sebaran rentang harga (price dispersion) dan mendeteksi pencilan data (outlier detection) guna memastikan integritas hasil analisis.',
                    'Menyusun visualisasi data dan laporan analitis komprehensif untuk menyajikan perbandingan kinerja biaya dan distribusi wilayah.'
                    
                ]
            },
            {
                title: 'Result',
                description: [
                    'Menghasilkan pangkalan data 2.486 listing yang 100% terstruktur, konsisten, dan siap digunakan untuk pengambilan keputusan berbasis data.',
                    'Memetakan konsentrasi penawaran wilayah (Bekasi sebagai area dengan jumlah listing tertinggi dan Jakarta Timur sebagai yang terendah).',
                    'Mengidentifikasi benchmark biaya operasional sewa harian/bulanan (Jakarta Selatan tercatat memiliki rata-rata harga sewa tertinggi, sementara Bogor berada di tingkat terendah).',
                    'Memetakan variasi jenis properti di mana kategori Kost Campuran mendominasi pangsa pasar sekaligus memiliki rata-rata nilai sewa tertinggi.'
                    
                ]
            }
        ]
    },

    'yolov8-rock-detection': {
        title: 'Analisis Eksperimental Performa Model Deteksi Batuan (YOLOv8)',
        category: 'Process Evaluation & Performance Analysis',
        technologies: ' Python · Computer Vision · Model Performance Evaluation · Data Optimization · Performance Benchmarking · Process Analysis',
        image: 'images/projek1.jpg',
        imageAlt: 'Pratinjau proyek Analisis Eksperimental Performa Model Deteksi Batuan (YOLOv8)',
        previewTitle: 'Pratinjau proyek',
        previewCaption: 'Pratinjau visual proyek deteksi jenis batuan.',
        gallery: [
            {
                image: 'images/yolov8-training-flowchart.png',
                alt: 'Flowchart proses pengumpulan dan pemrosesan data, pelatihan, pengujian, dan evaluasi model YOLOv8',
                caption: 'Alur persiapan data, pelatihan YOLOv8, pengujian, dan evaluasi model deteksi batuan.'
            },
            {
                image: 'images/yolov8-dataset-flowchart.png',
                alt: 'Flowchart eksperimen variasi jumlah gambar dan evaluasi model YOLOv8',
                caption: 'Alur eksperimen variasi jumlah gambar, pemrosesan dataset, pelatihan, dan evaluasi model YOLOv8.'
            },
            {
                image: 'images/jumlah_datasetbatuan.png',
                alt: 'Grafik distribusi jumlah batuan untuk tiga kelas',
                caption: 'Grafik distribusi jumlah data pada kelas batu bara, marmer, dan diorit.'
            },
            {
                image: 'images/grafik hasil deteksi.png',
                alt: 'Tabel persentase hasil deteksi pada variasi jumlah dataset',
                caption: 'Persentase hasil deteksi batuan berdasarkan variasi jumlah dataset.'
            }
        ],
        highlights: [
            {
                title: 'Project Overview',
                description: 'Mengembangkan sistem deteksi dan klasifikasi tiga jenis batuan (Batubara, Diorit, dan Marmer) secara real-time menggunakan Python dan YOLOv8. Penelitian ini mengevaluasi pengaruh variasi jumlah dataset terhadap performa model melalui pengujian akurasi deteksi, stabilitas, dan kecepatan pemrosesan video.'
            },
            {
                title: 'Problem',
                description: 'Dibutuhkan pengujian secara terstruktur untuk mengetahui bagaimana perubahan ukuran skala dataset memengaruhi tingkat akurasi, stabilitas, dan efisiensi waktu pemrosesan (inference speed) pada model deteksi objek YOLOv8. Tanpa evaluasi parameter ini, optimalisasi alokasi data sulit diukur secara objektif.'
            },
            {
                title: 'Action',
                description: [
                    'Merancang alur kerja terstruktur (flowchart) untuk memetakan tahapan eksperimen—mulai dari pengumpulan citra, anotasi, augmentasi data, hingga pengujian model secara sistematis.',
                    'Melakukan pengumpulan, anotasi, pembersihan data, dan augmentasi sampel secara terstruktur menggunakan platform Roboflow.',
                    'Melatih dan menguji model YOLOv8 menggunakan Python dengan enam variasi jumlah skala dataset secara bertahap.',
                    'Mengevaluasi hasil pelatihan model secara kuantitatif berdasarkan metrik Precision, Recall, F1-Score, mAP@0.5, serta kecepatan pemrosesan (FPS).',
                    'Menguji kemampuan deteksi model secara langsung menggunakan masukan data video untuk melihat stabilitas kinerjanya.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Menemukan konfigurasi titik optimal pada volume 300 sampel data yang menghasilkan keseimbangan performa terbaik (mAP@0.5 sebesar 97,6%, Precision 96,8%, dan Recall 97,0%).',
                    'Mengidentifikasi bahwa penambahan skala data yang terlalu besar (400–500 gambar) tidak selalu menaikkan performa, bahkan menunjukkan penurunan pada beberapa metrik uji.',
                    'Menghasilkan sistem deteksi objek berbasis video yang teruji dan terdokumentasi secara analitis melalui grafik evaluasi performa.',
                    
                ]
            }
        ]
    },
    'hydroponic-classification': {
        title: 'Sistem Otomasi & Klasifikasi Parameter Lingkungan Hidroponik',
        category: 'Operational Monitoring & Automation',
        technologies: 'Python Programming · Random Forest · Data Preprocessing & Modeling · Process Control · Decision Support System · Desktop Application Development',
        description: 'Mengembangkan sistem pemantauan hidroponik berbasis model prediktif untuk mengklasifikasikan kondisi suhu dan pH serta mendukung tindakan operasional.',
        image: 'images/projek2.png',
        imageAlt: 'Pratinjau proyek Sistem Otomasi & Klasifikasi Parameter Lingkungan Hidroponik',
        previewTitle: 'Pratinjau proyek',
        previewCaption: 'Pratinjau visual proyek Sistem Otomasi & Klasifikasi Parameter Lingkungan Hidroponik',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Pengembangan sistem pemantauan dan klasifikasi berbasis model prediktif (Random Forest) untuk mengontrol parameter lingkungan kritis seperti suhu dan pH air, guna memastikan stabilitas proses budidaya dan akurasi pengambilan keputusan operasional.'
            },
            {
                title: 'Problem',
                description: 'Pengendalian kualitas lingkungan hidroponik menghadapi tantangan dalam mengevaluasi berbagai parameter operasional secara bersamaan (suhu, pH air, dan faktor musiman). Tanpa sistem evaluasi yang terstruktur dan otomatis, proses mitigasi terhadap risiko ketidaksesuaian lingkungan menjadi lambat dan rentan terhadap inkonsistensi.'
            },
            {
                title: 'Action',
                description: [
                    'Melakukan pembersihan data, pengolahan, dan standardisasi variabel operasional (suhu, pH air, dan musim) sebagai acuan parameter proses.',
                'Membangun dan melatih model klasifikasi prediktif menggunakan algoritma Random Forest untuk mengevaluasi tingkat kesesuaian lingkungan.',
                'Mengintegrasikan model prediktif ke dalam aplikasi desktop interaktif guna mempermudah simulasi dan pemantauan parameter secara cepat.',
                'Merancang antarmuka operasional yang menyajikan hasil evaluasi status lingkungan secara *real-time* untuk mendukung rekomendasi tindakan korektif.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Menghasilkan instrumen kontrol berbasis model prediktif yang mengotomatisasi evaluasi kesesuaian lingkungan hidroponik secara konsisten.',
                'Mengintegrasikan input parameter kritis (suhu dan pH) untuk meminimalkan risiko kegagalan operasional budidaya.',
                'Menyediakan sistem pendukung keputusan (*Decision Support System*) yang mempercepat proses identifikasi kondisi lingkungan dan rekomendasi tindakan secara akurat.'
                ]
            }
        ]
    },
    
   
};

const projectId = new URLSearchParams(window.location.search).get('project');
const project = projectId && Object.prototype.hasOwnProperty.call(projects, projectId)
    ? projects[projectId]
    : null;
const content = document.querySelector('#project-detail-content');
const notFound = document.querySelector('#project-not-found');

if (!project) {
    notFound.hidden = false;
} else {
    document.title = `${project.title} | Robiatul Isnaini`;
    document.querySelector('#project-category').textContent = project.category;
    document.querySelector('#project-title').textContent = project.title;
    const projectDescription = project.description || project.highlights[0]?.description;
    document.querySelector('#project-description').textContent = Array.isArray(projectDescription)
        ? projectDescription.join(' ')
        : projectDescription || '';
    document.querySelector('#project-technologies').textContent = project.technologies;
    const githubLink = document.querySelector('#project-github-link');
    if (project.githubUrl) {
        githubLink.href = project.githubUrl;
        githubLink.hidden = false;
    }
    document.querySelector('#preview-title').textContent = project.previewTitle;
    document.querySelector('#preview-caption').textContent = project.previewCaption;

    const previewImage = document.querySelector('#preview-image');
    previewImage.src = project.image;
    previewImage.alt = project.imageAlt;

    const previewLink = document.querySelector('#preview-link');
    previewLink.href = project.image;

    const highlights = document.querySelector('#project-highlights');
    project.highlights.forEach((highlight) => {
        const section = document.createElement('article');
        section.className = 'project-highlight';

        const heading = document.createElement('h3');
        heading.textContent = highlight.title;

        let description;
        if (Array.isArray(highlight.description)) {
            description = document.createElement('ul');
            highlight.description.forEach((point) => {
                const item = document.createElement('li');
                item.textContent = point;
                description.append(item);
            });
        } else {
            description = document.createElement('p');
            description.textContent = highlight.description;
        }

        section.append(heading, description);
        highlights.append(section);
    });

    if (project.gallery) {
        const gallerySection = document.querySelector('#project-gallery-section');
        const gallery = document.querySelector('#project-gallery');

        project.gallery.forEach((item) => {
            const card = document.createElement('figure');
            card.className = 'experience-evidence-card';

            const button = document.createElement('button');
            button.className = 'experience-evidence-zoom';
            button.type = 'button';
            button.setAttribute('aria-label', `Perbesar gambar: ${item.alt}`);

            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.alt;
            button.append(image);

            const caption = document.createElement('figcaption');
            caption.className = 'experience-evidence-caption';
            const captionText = document.createElement('p');
            captionText.textContent = item.caption;
            caption.append(captionText);

            card.append(button, caption);
            gallery.append(card);
        });

        gallerySection.hidden = false;
    }

    content.hidden = false;
}

const evidenceDialog = document.querySelector('.experience-evidence-dialog');
const evidenceDialogImage = document.querySelector('.experience-evidence-dialog-image');
const evidenceDialogCaption = document.querySelector('.experience-evidence-dialog-caption');
const evidenceCloseButton = document.querySelector('.experience-evidence-close');

if (evidenceDialog && evidenceDialogImage && evidenceDialogCaption && evidenceCloseButton) {
    document.querySelectorAll('.experience-evidence-zoom').forEach((button) => {
        button.addEventListener('click', () => {
            const image = button.querySelector('img');
            const caption = button.closest('figure')?.querySelector('figcaption p');

            if (!image || !caption) {
                throw new Error('Gambar atau caption galeri proyek tidak ditemukan.');
            }

            evidenceDialogImage.src = image.src;
            evidenceDialogImage.alt = image.alt;
            evidenceDialogCaption.textContent = caption.textContent;
            evidenceDialog.showModal();
        });
    });

    evidenceCloseButton.addEventListener('click', () => evidenceDialog.close());
    evidenceDialog.addEventListener('click', (event) => {
        if (event.target === evidenceDialog) {
            evidenceDialog.close();
        }
    });
}
