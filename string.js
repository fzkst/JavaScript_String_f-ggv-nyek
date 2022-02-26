
function kiiratas1(){
    var szoveghossz = document.getElementById('szoveg1').value;
    var szoveghossz_ertek = szoveghossz.length;
    console.log(szoveghossz)
    console.log(szoveghossz_ertek)
    document.getElementById('szovegkiir1').innerHTML = szoveghossz_ertek + " karakter";
}

function osszefuz(){
    var nev1 = document.getElementById('nev1').value;
    var nev2 = document.getElementById('nev2').value;
    var full_nev = nev1 + " " + nev2 
    if (nev1 != "" && nev2 != ""){
        alert(full_nev)
    }else{
        alert("Minden mezőt töltsön ki!")
    }    
}

function kisbetus(){
    var szoveg = document.getElementById('szoveg1').value;
    document.getElementById('szovegkiir3').innerHTML = szoveg.toLowerCase();
}

function kisbetus4(){
    var szoveg = document.getElementById('szoveg4').value;
    document.getElementById('szovegkiir4').innerHTML = szoveg.toLowerCase();
}

function nagybetus4(){
    var szoveg = document.getElementById('szoveg4').value;
    document.getElementById('szovegkiir4').innerHTML = szoveg.toUpperCase();
}

function visszafele(){
    var szoveg = document.getElementById('szoveg5').value;
    szoveg = [...szoveg].reverse().join("");
    document.getElementById('szovegkiir5').innerHTML = szoveg;
}

function szerepele(){
    var szoveg = document.getElementById('szoveg6').value;
    var szo = document.getElementById('szo6').value;
    var benneVan = szoveg.includes(szo);
    if (szoveg == ""){
        alert("Nem adott meg szöveget!")
    }
    if (szo == ""){
        alert("Nem adta meg a keresendő szót!")
    }
    if (benneVan){
        alert("Szerepel az adott szó a keresett szövegben!")
    }else{
        alert("Nem szerepel az adott szó a keresett szövegben!")
    }
}

function szamlalo(){
    var szoveg = document.getElementById('szoveg7').value;
    darab = szoveg.split(" ").length - 1;
    alert(darab + " szóköz volt a szövegben.")
}