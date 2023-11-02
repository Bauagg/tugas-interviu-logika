// JumlahBilangan = 10 (ada 10 bilangan genap dimulai dari angka 2)
// JumlahKelompok = 2 (kelompokkan bilangan jadi 2 kelompok)
// Hasil: [2,4,6,8,10] [12,14,16,18,20]


const funtionMengelompokanBilanganGenapDanGanjil = (jumlahBilangan, jumlahKelompok) => {
    if (jumlahBilangan <= 0 || jumlahKelompok <= 0) {
        return console.log('Jumlah bilangan dan jumlah kelompok harus lebih besar dari nol.')
    }

    let bilanganGenap = []
    for (let i = 2; i <= jumlahBilangan * 2; i += 2) {
        bilanganGenap.push(i)
    }

    let kelompokBilangan = []
    const bilanganPerKelompok = Math.floor(bilanganGenap.length / jumlahKelompok)

    for (let i = 0; i < jumlahKelompok; i++) {
        const kelompok = bilanganGenap.slice(i * bilanganPerKelompok, (i + 1) * bilanganPerKelompok)
        kelompokBilangan.push(kelompok)
    }

    return kelompokBilangan

}

const jumlahBilangan = 10
const jumlahKelompok = 2

const hasil1 = funtionMengelompokanBilanganGenapDanGanjil(jumlahBilangan, jumlahKelompok)
console.log(hasil1)

// JumlahBilangan = 7 (ada 7 bilangan genap dimulai dari angka 2)
// JumlahKelompok = 3 (kelompokkan bilangan jadi 3 kelompok)
// Hasil: [2,4] [6,8] [10,12,14]

// const functionKelompok2 = (jumlahBilangan, jumlahKelompok) => {
//     if (jumlahBilangan <= 0 || jumlahKelompok <= 0) {
//         return console.log('Jumlah bilangan dan jumlah kelompok harus lebih besar dari nol.')
//     }

//     let bilanganGenap = []
//     for (let i = 2; i <= jumlahBilangan * 2; i += 2) {
//         bilanganGenap.push(i)
//     }

//     let bilanganKelompok = []

//     for (let i = 0; i < jumlahKelompok; i++) {
//         const kelompok = bilanganGenap.slice(i * Math.ceil(bilanganGenap.length / jumlahBilangan), (i + 1) * Math.ceil(bilanganGenap.length / jumlahBilangan))
//         bilanganKelompok.push(kelompok)
//     }

//     return bilanganKelompok
// }

// const jumlahBilangan2 = 7
// const jumlahKelompok2 = 3

// const hasil2 = functionKelompok2(jumlahBilangan2, jumlahKelompok2)
// console.log(hasil2)

const functionKelompok2 = (jumlahBilangan, jumlahKelompok) => {
    if (jumlahBilangan <= 0 || jumlahKelompok <= 0) {
        return console.log('Jumlah bilangan dan jumlah kelompok harus lebih besar dari nol.')
    }

    let bilanganKelompok = [];
    let bilanganGenap = 2;

    for (let i = 0; i < jumlahKelompok; i++) {
        let kelompok = [];
        for (let j = 0; j < Math.ceil(jumlahBilangan / jumlahKelompok); j++) {
            kelompok.push(bilanganGenap);
            bilanganGenap += 2;
        }
        bilanganKelompok.push(kelompok);
    }

    return bilanganKelompok;
}

const jumlahBilangan2 = 7;
const jumlahKelompok2 = 3;

const hasil2 = functionKelompok2(jumlahBilangan2, jumlahKelompok2);
console.log(hasil2);

// Fungsi ini digunakan untuk membuat bangun dari textsesuai parameter yang
// diinputkan
// ○ Parameter
// ■ JumlahBaris
// ○ Contoh 1
// ■ JumlahBaris = 3
// ■ Hasil:
// *****
// ***

const buatLogikaBintang = (numberBintang) => {
    if (numberBintang < 0) {
        return console.log('Jumlah baris harus lebih besar dari nol.')
    }

    if (numberBintang === 3) {
        for (let baris = numberBintang; baris > 0; baris--) {

            let bintang = ''
            for (let i = 1; i <= baris; i++) {
                if (i === 1) {
                    bintang = '*'
                } else if (i === 2) {
                    bintang = '***'
                } else if (i === 3) {
                    bintang = '*****'
                }
            }
            console.log(bintang)

        }
    } else if (numberBintang === 5) {
        for (let baris = numberBintang; baris > 0; baris--) {

            let bintang = ''
            for (let i = 1; i <= baris; i++) {
                if (i === 1) {
                    bintang = '*'
                } else if (i === 2) {
                    bintang = '***'
                } else if (i === 3) {
                    bintang = '*****'
                } else if (i === 4) {
                    bintang = '*******'
                } else if (i === 5) {
                    bintang = '*********'
                }
            }
            console.log(bintang)

        }
    }
}

buatLogikaBintang(3)

