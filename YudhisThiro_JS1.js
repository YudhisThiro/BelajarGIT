//Tugas YudhisThiro

let segitiga = "";

//Looping  segitiga  atas
for (let i = 0; i < 5; i++) { 
    for (let j = 0; j <= i; j++) {
        segitiga = segitiga + "* ";
    }
    segitiga = segitiga + '\n';
}

//Looping segitiga  bawah
for (let i = 5; i > 0; i--) { 
    for (let j = 1; j <= i; j++) {
        segitiga = segitiga + "* ";
    }
    segitiga = segitiga + '\n';
}

console.log(segitiga);