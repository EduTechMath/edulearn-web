const materialData = {
  PK: [
    {
      id: 'fungsi-kuadrat',
      name: 'Fungsi Kuadrat',
      description: 'Memahami bentuk umum fungsi kuadrat, titik puncak, akar-akar, dan grafik parabola.',
      definition: 'Fungsi kuadrat adalah fungsi dengan bentuk umum f(x) = ax² + bx + c, dengan a ≠ 0. Grafiknya berbentuk parabola.',
      formulas: [
        { label: 'Bentuk umum', value: 'f(x) = ax² + bx + c' },
        { label: 'Titik puncak', value: 'x = -b / (2a), y = f(x_p)' },
        { label: 'Diskriminan', value: 'D = b² - 4ac' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Diketahui f(x) = x² - 4x + 3.',
            'Koefisien a = 1, b = -4, c = 3.',
            'Titik puncak x = -(-4)/(2×1) = 2.',
            'y = 2² - 4(2) + 3 = -1.',
            'Jadi titik puncaknya adalah (2, -1).'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Diketahui akar-akar x² - 5x + 6 = 0.',
            'Faktorkan menjadi (x - 2)(x - 3) = 0.',
            'Maka akar-akarnya adalah x = 2 dan x = 3.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Akar-akar dari x² - 5x + 6 = 0 adalah ...',
            options: ['1 dan 6', '2 dan 3', '3 dan 4', '1 dan 5'],
            answer: 1,
            explanation: 'x² - 5x + 6 = (x - 2)(x - 3), sehingga akar-akarnya 2 dan 3.'
          },
          {
            prompt: 'Nilai a, b, c dari f(x) = 2x² - 3x + 5 berturut-turut adalah ...',
            options: ['2, -3, 5', '2, 3, 5', '-2, -3, 5', '2, -3, -5'],
            answer: 0,
            explanation: 'Bentuk umum ax² + bx + c, jadi a = 2, b = -3, c = 5.'
          }
        ],
        sedang: [
          {
            prompt: 'Titik puncak dari f(x) = x² - 6x + 8 adalah ...',
            options: ['(2,-4)', '(3,-1)', '(3,1)', '(4,0)'],
            answer: 1,
            explanation: 'x_p = -b/(2a) = 6/2 = 3, y_p = 9 - 18 + 8 = -1.'
          },
          {
            prompt: 'Diskriminan dari x² - 4x + 4 = 0 adalah ...',
            options: ['0', '4', '8', '16'],
            answer: 0,
            explanation: 'D = b² - 4ac = 16 - 16 = 0.'
          }
        ],
        susah: [
          {
            prompt: 'Fungsi kuadrat f(x) = x² - 4x + 3 memotong sumbu x pada titik ...',
            subPoints: [
              'Faktorkan persamaan kuadrat',
              'Tentukan akar-akarnya',
              'Tuliskan titik potong sumbu x'
            ],
            options: ['(1,0) dan (3,0)', '(2,0) dan (3,0)', '(1,0) dan (4,0)', '(0,1) dan (0,3)'],
            answer: 0,
            explanation: 'x² - 4x + 3 = (x - 1)(x - 3), jadi titik potong sumbu x adalah (1,0) dan (3,0).'
          },
          {
            prompt: 'Jika fungsi kuadrat f(x) = x² - 2x - 8 mempunyai akar x₁ dan x₂, maka x₁ + x₂ adalah ...',
            subPoints: [
              'Gunakan hubungan jumlah akar',
              'Ingat bentuk ax² + bx + c',
              'Hitung -b/a'
            ],
            options: ['-2', '2', '4', '8'],
            answer: 1,
            explanation: 'Jumlah akar pada ax² + bx + c adalah -b/a = 2.'
          }
        ]
      }
    },
    {
      id: 'program-linear',
      name: 'Program Linear',
      description: 'Menyelesaikan masalah optimasi dengan fungsi tujuan dan daerah penyelesaian.',
      definition: 'Program linear adalah metode untuk menentukan nilai optimum dari fungsi tujuan dengan batasan berbentuk pertidaksamaan linear.',
      formulas: [
        { label: 'Fungsi tujuan', value: 'Z = ax + by' },
        { label: 'Daerah penyelesaian', value: 'Himpunan titik yang memenuhi semua batasan' },
        { label: 'Nilai optimum', value: 'Diperoleh dari titik pojok daerah penyelesaian' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Batasan x + y ≤ 8, x ≥ 0, y ≥ 0.',
            'Daerah penyelesaian berada di kuadran I dan di bawah garis x + y = 8.',
            'Titik pojoknya adalah (0,0), (8,0), dan (0,8).'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Jika Z = 3x + 4y, evaluasi titik pojok.',
            'Pada (0,8), Z = 32.',
            'Pada (8,0), Z = 24.',
            'Jadi nilai maksimum adalah 32.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Daerah penyelesaian untuk x ≥ 0 dan y ≥ 0 adalah ...',
            visual: 'kuadran-satu',
            options: ['Kuadran I', 'Kuadran II', 'Kuadran III', 'Kuadran IV'],
            answer: 0,
            explanation: 'x ≥ 0 dan y ≥ 0 menunjukkan daerah di kuadran I.'
          },
          {
            prompt: 'Untuk fungsi tujuan Z = 2x + 3y, nilai Z pada titik (1,2) adalah ...',
            options: ['5', '6', '7', '8'],
            answer: 3,
            explanation: 'Z = 2(1) + 3(2) = 8.'
          }
        ],
        sedang: [
          {
            prompt: 'Jika Z = 4x + 5y, titik pojok daerah penyelesaian adalah (0,6), (3,0), dan (2,2). Nilai maksimum Z adalah ...',
            options: ['18', '24', '30', '32'],
            answer: 2,
            explanation: 'Z(0,6)=30, Z(3,0)=12, Z(2,2)=18. Jadi maksimum adalah 30.'
          },
          {
            prompt: 'Batasan x + y ≤ 10, x ≥ 0, y ≥ 0. Titik pojok yang mungkin adalah ...',
            visual: 'program-linear',
            options: ['(0,0), (10,0), (0,10)', '(0,0), (5,5), (0,10)', '(0,0), (5,0), (0,5)', '(10,0), (0,10), (5,5)'],
            answer: 0,
            explanation: 'Titik pojok dari daerah yang dibatasi x + y ≤ 10, x ≥ 0, y ≥ 0 adalah (0,0), (10,0), dan (0,10).'
          }
        ],
        susah: [
          {
            prompt: 'Diketahui fungsi tujuan Z = 5x + 4y dengan batasan x + y ≤ 8, x ≥ 0, y ≥ 0, x ≤ 5. Nilai maksimum Z dicapai di titik ...',
            visual: 'program-linear',
            subPoints: [
              'Evaluasi titik pojok daerah penyelesaian',
              'Gunakan fungsi tujuan',
              'Bandingkan hasilnya'
            ],
            options: ['(0,8)', '(5,3)', '(5,0)', '(3,5)'],
            answer: 1,
            explanation: 'Pada (5,3), Z = 5(5) + 4(3) = 37 yang merupakan maksimum.'
          },
          {
            prompt: 'Daerah penyelesaian dari sistem x + y ≤ 6, x ≥ 1, y ≥ 2. Titik pojoknya adalah ...',
            visual: 'program-linear',
            subPoints: [
              'Cari batasan x dan y',
              'Hitung titik potong',
              'Pilih titik pojok yang memenuhi semua batasan'
            ],
            options: ['(1,2), (1,5), (4,2)', '(1,2), (1,6), (4,2)', '(1,2), (4,2), (2,4)', '(1,5), (4,2), (2,4)'],
            answer: 0,
            explanation: 'Dengan x ≥ 1, y ≥ 2, x + y ≤ 6, titik pojoknya adalah (1,2), (1,5), dan (4,2).'
          }
        ]
      }
    },
    {
      id: 'kasus-fungsi',
      name: 'Fungsi',
      description: 'Mengenal fungsi, domain, range, dan cara menentukan nilai fungsi.',
      definition: 'Fungsi adalah hubungan khusus yang memasangkan setiap anggota domain dengan tepat satu anggota kodomain.',
      formulas: [
        { label: 'Notasi fungsi', value: 'f(x) = ax + b' },
        { label: 'Domain', value: 'Himpunan semua nilai input' },
        { label: 'Range', value: 'Himpunan semua nilai output' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Diketahui f(x) = 3x + 2.',
            'Maka f(4) = 3(4) + 2 = 14.',
            'Jadi nilai fungsi saat x = 4 adalah 14.'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Pada f(x) = x + 3, semua x bilangan real dapat digunakan.',
            'Range juga semua bilangan real.',
            'Jadi domain dan range adalah semua bilangan real.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Jika f(x) = 2x + 1, maka f(3) = ...',
            options: ['5', '6', '7', '8'],
            answer: 2,
            explanation: 'f(3) = 2(3) + 1 = 7.'
          },
          {
            prompt: 'Suatu relasi disebut fungsi jika ...',
            options: ['setiap anggota domain dipasangkan satu anggota kodomain', 'semua anggota kodomain sama', 'setiap anggota domain memiliki dua pasangan', 'anggota kodomain lebih banyak dari domain'],
            answer: 0,
            explanation: 'Definisi fungsi adalah setiap anggota domain dipasangkan tepat satu dengan anggota kodomain.'
          }
        ],
        sedang: [
          {
            prompt: 'Diketahui f(x) = x² - 3x + 2. Nilai f(2) adalah ...',
            options: ['0', '1', '2', '4'],
            answer: 0,
            explanation: 'f(2) = 4 - 6 + 2 = 0.'
          },
          {
            prompt: 'Jika f(x) = 5x - 4 dan f(a) = 11, maka a = ...',
            options: ['2', '3', '4', '5'],
            answer: 1,
            explanation: '5a - 4 = 11 → 5a = 15 → a = 3.'
          }
        ],
        susah: [
          {
            prompt: 'Diketahui f(x) = 3x + 2 dan g(x) = x² - 1. Nilai (g o f)(1) adalah ...',
            subPoints: [
              'Hitung f(1) terlebih dahulu',
              'Masukkan hasilnya ke g(x)',
              'Selesaikan operasi'
            ],
            options: ['3', '8', '10', '24'],
            answer: 3,
            explanation: 'f(1)=5, lalu g(5)=25-1=24.'
          },
          {
            prompt: 'Jika f(x) = 2x + 1 dan f(a) = 9, maka nilai a² + 1 adalah ...',
            subPoints: [
              'Cari nilai a dari persamaan f(a)=9',
              'Lanjutkan dengan menghitung a² + 1'
            ],
            options: ['10', '13', '17', '20'],
            answer: 2,
            explanation: '2a + 1 = 9 → a = 4, jadi a² + 1 = 17.'
          }
        ]
      }
    }
  ],
  PM: [
    {
      id: 'aritmatika-sosial',
      name: 'Aritmatika Sosial',
      description: 'Menerapkan konsep matematika dalam jual beli, diskon, pajak, dan keuntungan.',
      definition: 'Aritmatika sosial adalah penerapan operasi hitung pada kegiatan ekonomi seperti harga jual, harga beli, untung, rugi, diskon, dan pajak.',
      formulas: [
        { label: 'Untung', value: 'Untung = harga jual - harga beli' },
        { label: 'Rugi', value: 'Rugi = harga beli - harga jual' },
        { label: 'Persentase', value: 'Persentase = (bagian / total) × 100%' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Harga awal Rp120.000 dan diskon 15%.',
            'Diskon = 15% × 120.000 = 18.000.',
            'Harga akhir = 120.000 - 18.000 = 102.000.'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Harga beli Rp80.000 dan harga jual Rp96.000.',
            'Untung = 96.000 - 80.000 = 16.000.',
            'Persentase untung = 16.000 / 80.000 × 100% = 20%.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Jika harga beli Rp50.000 dan harga jual Rp60.000, then keuntungan adalah ...',
            options: ['Rp5.000', 'Rp10.000', 'Rp15.000', 'Rp20.000'],
            answer: 1,
            explanation: 'Keuntungan = 60.000 - 50.000 = 10.000.'
          },
          {
            prompt: 'Diskon 20% dari Rp100.000 adalah ...',
            options: ['Rp10.000', 'Rp15.000', 'Rp20.000', 'Rp25.000'],
            answer: 2,
            explanation: '20% × 100.000 = 20.000.'
          }
        ],
        sedang: [
          {
            prompt: 'Seorang pedagang membeli barang Rp160.000 lalu menjualnya dengan keuntungan 25%. Harga jualnya adalah ...',
            options: ['Rp180.000', 'Rp190.000', 'Rp200.000', 'Rp210.000'],
            answer: 2,
            explanation: 'Keuntungan = 25% × 160.000 = 40.000, jadi harga jual = 200.000.'
          },
          {
            prompt: 'Sebuah tas dijual dengan harga Rp240.000 setelah diskon 20%. Harga awal tas adalah ...',
            options: ['Rp260.000', 'Rp280.000', 'Rp300.000', 'Rp320.000'],
            answer: 2,
            explanation: 'Harga akhir = 80% × harga awal, jadi harga awal = 240.000 / 0,8 = 300.000.'
          }
        ],
        susah: [
          {
            prompt: 'Sebuah toko memberi diskon 10% lalu 5%. Jika harga awal Rp200.000, berapakah harga akhirnya?',
            subPoints: [
              'Hitung diskon pertama',
              'Hitung harga setelah diskon pertama',
              'Lanjutkan diskon kedua'
            ],
            options: ['Rp171.000', 'Rp180.000', 'Rp190.000', 'Rp171.500'],
            answer: 0,
            explanation: 'Harga setelah diskon 10% = 180.000. Diskon 5% dari 180.000 = 9.000, sehingga harga akhir = 171.000.'
          },
          {
            prompt: 'Harga beli sebuah barang Rp150.000. Jika ingin untung 30% dari harga beli, berapa harga jual yang harus ditetapkan?',
            subPoints: [
              'Hitung untung',
              'Tambahkan ke harga beli',
              'Tulis jawaban akhir'
            ],
            options: ['Rp180.000', 'Rp185.000', 'Rp195.000', 'Rp200.000'],
            answer: 2,
            explanation: 'Untung = 30% × 150.000 = 45.000, jadi harga jual = 195.000.'
          }
        ]
      }
    },
    {
      id: 'statistika',
      name: 'Statistika',
      description: 'Menyusun data, mean, median, modus, serta membaca penyajian data.',
      definition: 'Statistika adalah cabang matematika yang mempelajari cara mengumpulkan, menyajikan, menganalisis, dan menafsirkan data.',
      formulas: [
        { label: 'Mean', value: 'Mean = jumlah data / banyak data' },
        { label: 'Median', value: 'Median adalah nilai tengah dari data yang sudah diurutkan' },
        { label: 'Modus', value: 'Modus adalah data yang paling sering muncul' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Data: 5, 6, 7, 8, 9.',
            'Jumlah data = 35.',
            'Banyak data = 5.',
            'Mean = 35 / 5 = 7.'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Data: 2,3,3,4,5,3.',
            'Angka 3 muncul paling banyak.',
            'Jadi modusnya adalah 3.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Mean dari data 4,5,6,7,8 adalah ...',
            options: ['5', '6', '7', '8'],
            answer: 1,
            explanation: 'Jumlah data = 30, banyak data = 5, jadi mean = 6.'
          },
          {
            prompt: 'Modus dari data 3,4,4,5,6 adalah ...',
            options: ['3', '4', '5', '6'],
            answer: 1,
            explanation: 'Angka 4 muncul paling sering, jadi modusnya 4.'
          }
        ],
        sedang: [
          {
            prompt: 'Median dari data 1,3,4,5,7,8,9 adalah ...',
            options: ['4', '5', '6', '7'],
            answer: 1,
            explanation: 'Data sudah terurut dan nilai tengahnya adalah 5.'
          },
          {
            prompt: 'Data 2,3,5,5,5,7. Modusnya adalah ...',
            options: ['2', '3', '5', '7'],
            answer: 2,
            explanation: 'Angka 5 muncul paling banyak.'
          }
        ],
        susah: [
          {
            prompt: 'Median dari data 5,7,8,10,12,14,16,18 adalah ...',
            subPoints: [
              'Data sudah terurut',
              'Karena ada 8 data, ambil dua nilai tengah',
              'Hitung rata-ratanya'
            ],
            options: ['10', '11', '12', '13'],
            answer: 1,
            explanation: 'Median = rata-rata data ke-4 dan ke-5 = (10 + 12) / 2 = 11.'
          },
          {
            prompt: 'Mean dari data 2,4,6,8,10,12 adalah ...',
            subPoints: [
              'Jumlah semua data',
              'Bagi dengan banyak data',
              'Sederhanakan hasil'
            ],
            options: ['7', '7.5', '8', '8.5'],
            answer: 1,
            explanation: 'Jumlah data = 42, banyak data = 6, jadi mean = 7.'
          }
        ]
      }
    },
    {
      id: 'peluang',
      name: 'Peluang',
      description: 'Menghitung kemungkinan kejadian berdasarkan ruang sampel.',
      definition: 'Peluang adalah ukuran kemungkinan suatu kejadian terjadi dalam suatu percobaan.',
      formulas: [
        { label: 'Peluang', value: 'P(A) = banyak kejadian yang diinginkan / banyak seluruh kejadian' },
        { label: 'Peluang komplemen', value: 'P(A^c) = 1 - P(A)' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Pada dadu, ruang sampel = {1,2,3,4,5,6}.',
            'Angka genap = {2,4,6}.',
            'Peluang muncul angka genap = 3/6 = 1/2.'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Pada pelemparan koin, peluang gambar = 1/2.',
            'Peluang bukan gambar = 1 - 1/2 = 1/2.'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Peluang muncul angka 5 pada dadu adalah ...',
            options: ['1/3', '1/6', '1/2', '5/6'],
            answer: 1,
            explanation: 'Pada dadu enam sisi, hanya ada satu sisi dengan angka 5, jadi peluangnya 1/6.'
          },
          {
            prompt: 'Pada pelemparan koin, peluang muncul sisi gambar adalah ...',
            options: ['1/2', '1/3', '2/3', '1'],
            answer: 0,
            explanation: 'Koin memiliki dua sisi yang kemungkinan muncul sama besar.'
          }
        ],
        sedang: [
          {
            prompt: 'Dalam kantong terdapat 3 bola merah dan 2 bola biru. Peluang mengambil bola merah adalah ...',
            options: ['2/5', '3/5', '1/3', '3/2'],
            answer: 1,
            explanation: 'Total bola = 5, jadi peluang bola merah = 3/5.'
          },
          {
            prompt: 'Jika peluang hujan hari ini 0,7, maka peluang tidak hujan adalah ...',
            options: ['0,3', '0,7', '0,5', '0,2'],
            answer: 0,
            explanation: 'Peluang tidak hujan = 1 - 0,7 = 0,3.'
          }
        ],
        susah: [
          {
            prompt: 'Dua koin dilempar bersamaan. Peluang muncul tepat satu angka adalah ...',
            subPoints: [
              'Tulis semua kemungkinan hasil',
              'Hitung kejadian tepat satu angka',
              'Bagi dengan total kemungkinan'
            ],
            options: ['1/4', '1/2', '3/4', '1'],
            answer: 1,
            explanation: 'Hasil yang mungkin adalah GG, GA, AG, AA. Hanya GA dan AG yang tepat satu angka, jadi peluang = 2/4 = 1/2.'
          },
          {
            prompt: 'Sebuah kotak berisi 4 bola merah, 3 bola biru, dan 3 bola hijau. Peluang mengambil bola bukan biru adalah ...',
            subPoints: [
              'Hitung total bola',
              'Hitung bola yang bukan biru',
              'Bandingkan'
            ],
            options: ['3/10', '4/10', '7/10', '1/2'],
            answer: 2,
            explanation: 'Total bola 10; bola bukan biru = 4 + 3 = 7, jadi peluangnya = 7/10.'
          }
        ]
      }
    },
    {
      id: 'bangun-datar',
      name: 'Bangun Datar',
      description: 'Mempelajari luas, keliling, dan sifat bangun datar.',
      definition: 'Bangun datar adalah bentuk dua dimensi yang memiliki luas dan keliling.',
      formulas: [
        { label: 'Luas persegi', value: 'L = s²' },
        { label: 'Luas segitiga', value: 'L = 1/2 × a × t' },
        { label: 'Keliling persegi panjang', value: 'K = 2(p + l)' }
      ],
      examples: [
        {
          title: 'Contoh pengerjaan 1',
          steps: [
            'Persegi panjang dengan panjang 8 cm dan lebar 5 cm.',
            'Luas = 8 × 5 = 40 cm².',
            'Keliling = 2(8 + 5) = 26 cm.'
          ]
        },
        {
          title: 'Contoh pengerjaan 2',
          steps: [
            'Segitiga dengan alas 10 cm dan tinggi 6 cm.',
            'Luas = 1/2 × 10 × 6 = 30 cm².'
          ]
        }
      ],
      questions: {
        mudah: [
          {
            prompt: 'Luas persegi dengan sisi 7 cm adalah ...',
            options: ['14 cm²', '21 cm²', '49 cm²', '56 cm²'],
            answer: 2,
            explanation: 'L = s² = 7² = 49 cm².'
          },
          {
            prompt: 'Keliling persegi panjang 6 cm × 4 cm adalah ...',
            options: ['10 cm', '20 cm', '24 cm', '28 cm'],
            answer: 1,
            explanation: 'K = 2(6 + 4) = 20 cm.'
          }
        ],
        sedang: [
          {
            prompt: 'Luas segitiga dengan alas 12 cm dan tinggi 8 cm adalah ...',
            options: ['24 cm²', '36 cm²', '48 cm²', '96 cm²'],
            answer: 2,
            explanation: 'L = 1/2 × 12 × 8 = 48 cm².'
          },
          {
            prompt: 'Sebuah jajargenjang memiliki alas 10 cm dan tinggi 6 cm. Luasnya adalah ...',
            options: ['30 cm²', '40 cm²', '50 cm²', '60 cm²'],
            answer: 3,
            explanation: 'L = alas × tinggi = 10 × 6 = 60 cm².'
          }
        ],
        susah: [
          {
            prompt: 'Luas gabungan persegi panjang 8 × 5 dan segitiga dengan alas 8 dan tinggi 6 adalah ...',
            subPoints: [
              'Hitung luas persegi panjang',
              'Hitung luas segitiga',
              'Jumlahkan keduanya'
            ],
            options: ['40 cm²', '48 cm²', '64 cm²', '76 cm²'],
            answer: 2,
            explanation: 'Luas persegi panjang = 40 dan luas segitiga = 24, total = 64 cm².'
          },
          {
            prompt: 'Keliling persegi panjang adalah 30 cm. Jika panjang 9 cm, berapakah lebarnya?',
            subPoints: [
              'Gunakan rumus keliling',
              'Cek persamaan',
              'Selesaikan untuk lebar'
            ],
            options: ['6 cm', '7 cm', '8 cm', '9 cm'],
            answer: 0,
            explanation: '2(p + l)=30 → p + l = 15 → 9 + l = 15 → l = 6 cm.'
          }
        ]
      }
    }
  ]
};

const STORAGE_KEY = 'edulearn-progress-v1';
const allTopics = [...materialData.PK, ...materialData.PM];
const urlParams = new URLSearchParams(window.location.search);
const initialTopicId = urlParams.get('topic');

const state = {
  subject: 'PK',
  selectedTopicId: initialTopicId && allTopics.some((topic) => topic.id === initialTopicId)
    ? initialTopicId
    : materialData.PK[0].id,
  difficulty: 'mudah',
  minutes: 10,
  questionCount: 10,
  untimedMode: false,
  quiz: null,
  progress: loadProgress()
};

const elements = {
  topicGrid: document.getElementById('topicGrid'),
  topicDetail: document.getElementById('topicDetail'),
  topicSelect: document.getElementById('topicSelect'),
  timerMinutes: document.getElementById('timerMinutes'),
  quizArea: document.getElementById('quizArea'),
  resultsArea: document.getElementById('resultsArea'),
  progressOverview: document.getElementById('progressOverview'),
  overviewPercent: document.getElementById('overviewPercent'),
  currentYear: document.getElementById('current-year')
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved || { byTopic: {}, examHistory: [] };
  } catch {
    return { byTopic: {}, examHistory: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function getTopicById(topicId) {
  return allTopics.find((topic) => topic.id === topicId);
}

function renderSubjectTabs() {
  document.querySelectorAll('.subject-tab').forEach((button) => {
    button.classList.toggle('active', button.dataset.subject === state.subject);
  });
}

function getTopicStats(topicId) {
  return state.progress.byTopic[topicId] || { attempts: 0, correct: 0, wrong: 0, totalSeconds: 0 };
}

function renderTopicCards() {
  if (!elements.topicGrid) return;

  const topics = materialData[state.subject];

  elements.topicGrid.innerHTML = topics.map((topic) => {
    const stats = getTopicStats(topic.id);
    const accuracy = stats.attempts ? Math.round((stats.correct / Math.max(stats.correct + stats.wrong, 1)) * 100) : 0;

    return `
      <button class="topic-card ${topic.id === state.selectedTopicId ? 'active' : ''}" data-topic-id="${topic.id}" type="button">
        <div class="topic-head">
          <h3>${topic.name}</h3>
          <span class="topic-tag">${state.subject}</span>
        </div>
        <p>${topic.description}</p>
        <div class="topic-meta">
          <span>Latihan: ${stats.attempts}</span>
          <span>Akurasi: ${accuracy}%</span>
        </div>
      </button>
    `;
  }).join('');

  elements.topicGrid.querySelectorAll('.topic-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.selectedTopicId = card.dataset.topicId;
      renderTopicCards();
      renderTopicDetail();
      renderTopicSelect();
    });
  });
}

function renderTopicDetail() {
  if (!elements.topicDetail) return;

  const topic = getTopicById(state.selectedTopicId);

  elements.topicDetail.innerHTML = `
    <h2>${topic.name}</h2>
    <p class="detail-subtitle">${topic.description}</p>

    <div class="detail-section">
      <h3>Pengertian materi</h3>
      <p>${topic.definition}</p>
    </div>

    <div class="detail-section">
      <h3>Rumus penting</h3>
      <div class="formula-grid">
        ${topic.formulas.map((formula) => `
          <div class="formula-card">
            <h4>${formula.label}</h4>
            <p>${formula.value}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-section">
      <h3>Contoh pengerjaan soal</h3>
      <div class="example-grid">
        ${topic.examples.map((example) => `
          <div class="example-card">
            <h4>${example.title}</h4>
            <ul>
              ${example.steps.map((step) => `<li>${step}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="detail-actions">
      <button class="btn btn-primary" type="button" data-start-topic="${topic.id}">Latihan subtest</button>
      <button class="btn btn-secondary" type="button" data-scroll-latihan="true">Pilih subtest</button>
    </div>
  `;

  const startButton = elements.topicDetail.querySelector('[data-start-topic]');
  const scrollButton = elements.topicDetail.querySelector('[data-scroll-latihan]');

  startButton?.addEventListener('click', () => {
    window.location.href = `subtest.html?topic=${topic.id}`;
  });

  scrollButton?.addEventListener('click', () => {
    document.getElementById('latihan').scrollIntoView({ behavior: 'smooth' });
  });
}

function renderTopicSelect() {
  if (!elements.topicSelect) return;

  const topicOptions = allTopics.map((topic) => `
    <option value="${topic.id}">${topic.name}</option>
  `).join('');

  elements.topicSelect.innerHTML = topicOptions;
  elements.topicSelect.value = state.selectedTopicId;
}

function setDifficultyButtons() {
  document.querySelectorAll('.difficulty-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.difficulty === state.difficulty);
  });
}

function bindEvents() {
  document.querySelectorAll('.subject-tab').forEach((button) => {
    button.addEventListener('click', () => {
      state.subject = button.dataset.subject;
      state.selectedTopicId = materialData[state.subject][0].id;
      renderSubjectTabs();
      renderTopicCards();
      renderTopicDetail();
      renderTopicSelect();
    });
  });

  document.querySelectorAll('.difficulty-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.difficulty = button.dataset.difficulty;
      setDifficultyButtons();
    });
  });

  const increaseTimeBtn = document.getElementById('increaseTime');
  const decreaseTimeBtn = document.getElementById('decreaseTime');
  const untimedCheckbox = document.getElementById('untimedMode');
  const questionCountInput = document.getElementById('questionCount');

  increaseTimeBtn?.addEventListener('click', () => {
    const nextValue = Math.min(60, Number(elements.timerMinutes.value) + 1);
    state.minutes = nextValue;
    elements.timerMinutes.value = nextValue;
  });

  decreaseTimeBtn?.addEventListener('click', () => {
    const nextValue = Math.max(1, Number(elements.timerMinutes.value) - 1);
    state.minutes = nextValue;
    elements.timerMinutes.value = nextValue;
  });

  elements.timerMinutes?.addEventListener('input', (event) => {
    const val = Math.max(1, Math.min(60, Number(event.target.value)));
    state.minutes = val;
    elements.timerMinutes.value = val;
  });

  questionCountInput?.addEventListener('input', (event) => {
    const value = Math.max(5, Math.min(50, Number(event.target.value) || 5));
    state.questionCount = value;
    questionCountInput.value = value;
  });

  untimedCheckbox?.addEventListener('change', (event) => {
    state.untimedMode = event.target.checked;
    if (elements.timerMinutes) {
      elements.timerMinutes.disabled = state.untimedMode;
    }
    increaseTimeBtn.disabled = state.untimedMode;
    decreaseTimeBtn.disabled = state.untimedMode;
  });

  elements.topicSelect?.addEventListener('change', (event) => {
    state.selectedTopicId = event.target.value;
    renderTopicCards();
    renderTopicDetail();
  });

  document.getElementById('startSubtest')?.addEventListener('click', () => startQuiz('subtest'));
  document.getElementById('startExam')?.addEventListener('click', () => startQuiz('exam'));

  const menuToggle = document.querySelector('.menu-toggle');
  const topbar = document.querySelector('.topbar');
  menuToggle?.addEventListener('click', () => {
    topbar.classList.toggle('nav-open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => topbar.classList.remove('nav-open'));
  });
}

function buildQuestions(mode) {
  const selectedTopic = getTopicById(state.selectedTopicId);
  const questions = [];

  if (mode === 'subtest') {
    const topicQuestions = selectedTopic.questions[state.difficulty] || [];
    topicQuestions.forEach((question) => {
      questions.push({ ...question, topicId: selectedTopic.id, topicName: selectedTopic.name });
    });
  } else {
    allTopics.forEach((topic) => {
      const topicQuestions = topic.questions[state.difficulty] || [];
      topicQuestions.forEach((question) => {
        questions.push({ ...question, topicId: topic.id, topicName: topic.name });
      });
    });
  }

  return questions
    .sort(() => Math.random() - 0.5)
    .slice(0, state.questionCount)
    .map((question) => ({ ...question, selectedChoice: undefined }));
}

function startQuiz(mode) {
  const questions = buildQuestions(mode);

  state.quiz = {
    mode,
    questions,
    questionLimitNotice: questions.length < state.questionCount
      ? `Tersedia ${questions.length} soal unik pada tingkat kesulitan ini. Semua soal akan ditampilkan tanpa pengulangan.`
      : '',
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    startedAt: Date.now(),
    timerId: null,
    active: true,
    timed: !state.untimedMode,
    totalSeconds: 0,
    finished: false
  };

  elements.quizArea.classList.remove('hidden');
  elements.quizArea.innerHTML = '';
  elements.resultsArea.classList.add('hidden');

  renderQuestion();

  if (state.quiz.timed) {
    startCountdown();
  }
}

function startCountdown() {
  const totalSeconds = state.minutes * 60;
  let remaining = totalSeconds;

  state.quiz.timerId = setInterval(() => {
    remaining -= 1;
    state.quiz.totalSeconds = totalSeconds - remaining;

    if (remaining <= 0) {
      clearInterval(state.quiz.timerId);
      finishQuiz('Waktu habis');
      return;
    }

    renderTimerLabel(remaining);
  }, 1000);

  renderTimerLabel(remaining);
}

function renderTimerLabel(remaining) {
  const quizMeta = document.querySelector('.quiz-meta.timer');
  const markup = `
    <div class="quiz-meta timer">
      <span>Waktu tersisa: <strong>${formatDuration(remaining)}</strong></span>
      <span>Soal ${state.quiz.currentIndex + 1}/${state.quiz.questions.length}</span>
    </div>
  `;

  if (quizMeta) {
    quizMeta.outerHTML = markup;
  } else {
    elements.quizArea.insertAdjacentHTML('beforebegin', markup);
  }
}

function renderQuestionVisual(visualType) {
  if (!visualType) return '';

  const isQuadrantVisual = visualType === 'kuadran-satu';
  const polygonPoints = isQuadrantVisual ? '62,170 62,62 170,62 170,170' : '62,170 62,62 170,170';
  const line = isQuadrantVisual ? '' : '<line x1="62" y1="62" x2="170" y2="170" class="diagram-line" />';

  return `
    <div class="question-visual">
      <p>Gambar pendukung</p>
      <svg viewBox="0 0 220 210" role="img" aria-label="Diagram koordinat daerah penyelesaian">
        <defs>
          <marker id="arrow-${visualType}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
          </marker>
        </defs>
        <line x1="40" y1="170" x2="195" y2="170" class="diagram-axis" marker-end="url(#arrow-${visualType})" />
        <line x1="62" y1="190" x2="62" y2="35" class="diagram-axis" marker-end="url(#arrow-${visualType})" />
        <polygon points="${polygonPoints}" class="diagram-region" />
        ${line}
        <text x="198" y="176" class="diagram-label">x</text>
        <text x="55" y="30" class="diagram-label">y</text>
        <text x="48" y="187" class="diagram-label">0</text>
      </svg>
      <small>Daerah berwarna menunjukkan bagian yang memenuhi batasan soal.</small>
    </div>
  `;
}

function renderQuestion() {
  if (!state.quiz || state.quiz.finished) return;

  const question = state.quiz.questions[state.quiz.currentIndex];
  const questionNumber = state.quiz.currentIndex + 1;

  const subPointsHtml = question.subPoints?.length
    ? `<div class="example-card" style="margin-top: 1rem;">
        <h4>Petunjuk pengerjaan</h4>
        <ul>
          ${question.subPoints.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </div>`
    : '';
  const visualHtml = renderQuestionVisual(question.visual);
  const questionLimitNotice = state.quiz.questionLimitNotice
    ? `<p class="question-limit-notice">${state.quiz.questionLimitNotice}</p>`
    : '';

  const content = `
    <div class="quiz-card">
      <div class="quiz-meta">
        <span>${question.topicName}</span>
        <span>Soal ${questionNumber}/${state.quiz.questions.length}</span>
      </div>
      ${questionLimitNotice}
      <h3>${question.prompt}</h3>
      ${visualHtml}
      ${subPointsHtml}
      <div class="option-list">
        ${question.options.map((option, index) => `
          <button class="option-btn" data-choice="${index}" type="button">${option}</button>
        `).join('')}
      </div>
      <div class="explanation-box hidden"></div>
      <div class="quiz-footer">
        <button class="btn btn-primary" id="nextQuestionBtn" type="button" disabled>
          ${questionNumber === state.quiz.questions.length ? 'Selesai' : 'Lanjut'}
        </button>
      </div>
    </div>
  `;

  elements.quizArea.innerHTML = content;

  elements.quizArea.querySelectorAll('.option-btn').forEach((button) => {
    button.addEventListener('click', () => handleAnswer(button, question));
  });

  document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    if (state.quiz.currentIndex < state.quiz.questions.length - 1) {
      state.quiz.currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz('Semua soal selesai');
    }
  });

  if (state.quiz.timed) {
    renderTimerLabel(state.minutes * 60);
  }
}

function handleAnswer(button, question) {
  const buttons = elements.quizArea.querySelectorAll('.option-btn');
  const nextBtn = document.getElementById('nextQuestionBtn');

  buttons.forEach((item) => {
    item.disabled = true;
  });

  const userChoice = Number(button.dataset.choice);
  button.classList.add('selected');

  question.selectedChoice = userChoice;

  if (userChoice === question.answer) {
    state.quiz.correct += 1;
  } else {
    state.quiz.wrong += 1;
  }

  nextBtn.disabled = false;
}

function finishQuiz(statusText) {
  if (!state.quiz) return;

  clearInterval(state.quiz.timerId);
  document.querySelector('.quiz-meta.timer')?.remove();
  state.quiz.finished = true;

  const total = state.quiz.questions.length;
  const accuracy = total ? Math.round((state.quiz.correct / total) * 100) : 0;
  const elapsedSeconds = Math.max(1, Math.round((Date.now() - state.quiz.startedAt) / 1000));

  elements.resultsArea.innerHTML = `
    <div class="result-box">
      <h3>${statusText}</h3>
      <div class="result-summary">
        <p><strong>Skor:</strong> ${state.quiz.correct}/${total}</p>
        <p><strong>Akurasi:</strong> ${accuracy}%</p>
        <p><strong>Benar:</strong> ${state.quiz.correct}</p>
        <p><strong>Salah:</strong> ${state.quiz.wrong}</p>
        <p><strong>Waktu:</strong> ${formatDuration(elapsedSeconds)}</p>
      </div>
      <div class="mistake-list">
        ${state.quiz.questions.filter((question) => question.selectedChoice !== question.answer).map((question) => `
          <div class="mistake-item">
            <p><strong>Koreksi soal</strong> - ${question.topicName}</p>
            <p>${question.prompt}</p>
            <p>Jawaban kamu: ${question.selectedChoice === undefined ? 'Belum dijawab' : question.options[question.selectedChoice]}</p>
            <p>Jawaban benar: ${question.options[question.answer]}</p>
            <p>Penjelasan: ${question.explanation}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  elements.resultsArea.classList.remove('hidden');
  elements.quizArea.classList.add('hidden');

  recordProgress();
  renderProgressOverview();
}

function recordProgress() {
  if (!state.quiz) return;

  const topicIds = state.quiz.mode === 'subtest'
    ? [state.selectedTopicId]
    : [...new Set(state.quiz.questions.map((q) => q.topicId))];

  topicIds.forEach((topicId) => {
    const current = state.progress.byTopic[topicId] || { attempts: 0, correct: 0, wrong: 0, totalSeconds: 0 };
    const relevant = state.quiz.questions.filter((question) => question.topicId === topicId);
    const correct = relevant.filter((question) => question.selectedChoice === question.answer).length;
    const wrong = relevant.length - correct;

    current.attempts += 1;
    current.correct += correct;
    current.wrong += wrong;
    current.totalSeconds += state.quiz.totalSeconds || Math.max(1, Math.round((Date.now() - state.quiz.startedAt) / 1000));

    state.progress.byTopic[topicId] = current;
  });

  if (state.quiz.mode === 'exam') {
    state.progress.examHistory.push({
      date: new Date().toISOString(),
      correct: state.quiz.correct,
      wrong: state.quiz.wrong,
      total: state.quiz.questions.length,
      accuracy: Math.round((state.quiz.correct / state.quiz.questions.length) * 100),
      difficulty: state.difficulty,
      mode: state.untimedMode ? 'tanpa-waktu' : 'berwaktu'
    });
  }

  saveProgress();
}

function renderProgressOverview() {
  if (!elements.progressOverview) return;

  const totalAttempts = allTopics.reduce((sum, topic) => sum + (state.progress.byTopic[topic.id]?.attempts || 0), 0);
  const completion = totalAttempts > 0 ? Math.min(100, Math.round((totalAttempts / (allTopics.length * 4)) * 100)) : 0;

  if (elements.overviewPercent) {
    elements.overviewPercent.textContent = `${completion}%`;
  }

  const ring = document.querySelector('.progress-ring');
  if (ring) {
    ring.style.background = `conic-gradient(var(--primary) ${completion * 3.6}deg, rgba(79,70,229,0.15) 0deg)`;
  }

  const cardsHtml = allTopics.map((topic) => {
    const stats = getTopicStats(topic.id);
    const accuracy = stats.attempts ? Math.min(100, Math.round((stats.correct / Math.max(stats.correct + stats.wrong, 1)) * 100)) : 0;
    const averageSeconds = stats.attempts ? Math.round(stats.totalSeconds / stats.attempts) : 0;

    return `
      <div class="progress-card">
        <h3>${topic.name}</h3>
        <div class="progress-wrapper">
          <div class="progress-row">
            <div class="label">
              <span>Akurasi</span>
              <strong>${accuracy}%</strong>
            </div>
            <div class="progress-bar">
              <span style="width:${accuracy}%"></span>
            </div>
          </div>
        </div>
        <div class="progress-metrics">
          <span>Benar: ${stats.correct}</span>
          <span>Salah: ${stats.wrong}</span>
          <span>Rata-rata: ${formatDuration(averageSeconds)}</span>
        </div>
      </div>
    `;
  }).join('');

  const latestExam = state.progress.examHistory[state.progress.examHistory.length - 1];
  const examHtml = latestExam
    ? `
      <div class="exam-summary">
        <div class="summary-stat">
          <span>Ujian terakhir</span>
          <strong>${latestExam.accuracy}%</strong>
        </div>
        <div class="summary-stat">
          <span>Benar</span>
          <strong>${latestExam.correct}</strong>
        </div>
        <div class="summary-stat">
          <span>Salah</span>
          <strong>${latestExam.wrong}</strong>
        </div>
        <div class="summary-stat">
          <span>Mode</span>
          <strong>${latestExam.mode === 'tanpa-waktu' ? 'Tanpa waktu' : 'Dengan waktu'}</strong>
        </div>
      </div>
    `
    : '<div class="summary-stat"><span>Ujian terakhir</span><strong>Belum ada</strong></div>';

  elements.progressOverview.innerHTML = `
    <div class="progress-grid">
      ${cardsHtml}
    </div>
    <div class="progress-card" style="margin-top: 1rem;">
      <h3>Ringkasan ujian semua materi</h3>
      ${examHtml}
    </div>
  `;
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function initialize() {
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  if (elements.timerMinutes) {
    elements.timerMinutes.value = state.minutes;
    elements.timerMinutes.disabled = state.untimedMode;
  }

  const questionCountInput = document.getElementById('questionCount');
  if (questionCountInput) {
    questionCountInput.value = state.questionCount;
  }

  const untimedCheckbox = document.getElementById('untimedMode');
  if (untimedCheckbox) {
    untimedCheckbox.checked = state.untimedMode;
  }

  renderSubjectTabs();
  renderTopicCards();
  renderTopicDetail();
  renderTopicSelect();
  setDifficultyButtons();
  renderProgressOverview();
  bindEvents();
}

initialize();
