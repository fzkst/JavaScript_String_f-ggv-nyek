
function kiiratas1(){
    var szoveghossz = document.getElementById('szoveg1').value;
    var szoveghossz_ertek = szoveghossz.length;
    console.log(szoveghossz)
    console.log(szoveghossz_ertek)
    document.getElementById('szovegkiir1').innerHTML = szoveghossz_ertek + " karakter";
}