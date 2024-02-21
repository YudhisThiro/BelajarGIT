//YudhisThiro - Tugas Sesi 4

console.log("Selamat Datang Di Kalkulator Sederhana");
console.log("Contoh Hasil Perhitungan: ");

function kalkulator(angkasatu, operatorDipilih, angkaKedua) {
    switch (operatorDipilih) {
        case '+':
            return angkasatu + angkaKedua;
        case '-':
            return angkasatu - angkaKedua;
        case '*':
            return angkasatu * angkaKedua;
        case '/':
            if (angkaKedua === 0) {
                return "Maaf, pembagian nol nol tidak bisa dilakukan";
            } else {
                return angkasatu / angkaKedua;
            }
        case '%':
            if (angkaKedua === 0) {
                return "Maaf, modulo nol tidak bisa dilakukan";
            }
            else {
                return angkasatu % angkaKedua;
            }
        default:
            return "Operator not valid";
    }
}

const operator= ['+','-','*','/','%'];  

let bilangansatu = 9;
let bilanganKedua = 7;

let penjumlahan = kalkulator(bilangansatu, operator[0], bilanganKedua); //Contoh penjumlahan
console.log(`Hasil perhitungan ${bilangansatu} ${operator[0]} ${bilanganKedua} = ${penjumlahan}`);

let pengurangan = kalkulator(bilangansatu, operator[1], bilanganKedua); //Contoh pengurangan
console.log(`Hasil perhitungan ${bilangansatu} ${operator[1]} ${bilanganKedua} = ${pengurangan}`);

let perkalian = kalkulator(bilangansatu, operator[2], bilanganKedua); //Contoh perkalian
console.log(`Hasil perhitungan ${bilangansatu} ${operator[2]} ${bilanganKedua} = ${perkalian}`);

let pembagian = kalkulator(bilangansatu, operator[3], bilanganKedua); //Contoh pembagian
console.log(`Hasil perhitungan ${bilangansatu} ${operator[3]} ${bilanganKedua} = ${pembagian}`);

let modulo = kalkulator(bilangansatu, operator[4], bilanganKedua); //Contoh modulo
console.log(`Hasil perhitungan ${bilangansatu} ${operator[4]} ${bilanganKedua} = ${modulo}`);