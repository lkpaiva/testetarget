let str = "pneumoultramicroscopicossilicovulcanoconiótico é uma palavra de 46 letras que designa uma doença pulmonar causada pela inalação de cinzas vulcânicas. A maior palavra em português";

processarString(str);

function processarString(input) {
    let count = 0;

 
    for (let char of input) {
        if (char === 'a' || char === 'A') {
            count++;
        }
    }

    if (count > 0) {
        console.log(`A letra 'a' ocorre ${count} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não ocorre na string.");
    }
}
