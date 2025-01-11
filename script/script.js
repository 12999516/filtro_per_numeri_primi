function numeri_primi(){
    let a_primi = [];
    let a_numeri = [];
    let divisori = 0;

for(let i = 0; i < 10000; i++) {
a_numeri.push(i + 1)
}


for(let j = 1; j <= a_numeri.length; j++) {
    for (let y = 1; y <= a_numeri[j]; y++) {
        if(a_numeri[j] % y == 0) {
            divisori ++;
        }
        if(divisori === 2) {
            a_primi.push(a_numeri[j])
            console.log(divisori);
        }
    }
}
document.getElementById("risposta").innerHTML = a_numeri
}