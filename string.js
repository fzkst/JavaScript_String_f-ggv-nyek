
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

function kodol(){
    var szoveg = document.getElementById('szoveg8').value;    
    for (i = 0; i < szoveg.length; i++){
    var kodolt = szoveg[i].charCodeAt();
    document.getElementById('kodolt').innerHTML += kodolt;
    }  
}

function torol(){
    document.getElementById('kodol').innerHTML = "";
}

function kodolt9(){
    for (i = 0; i < 256; i++){
        var karakter = String.fromCharCode(i);
        if (i == 0 || i == 255){
            document.getElementById('kodolt9').innerHTML += karakter
        }else{
            document.getElementById('kodolt9').innerHTML += karakter + ", ";
        }
        
    }
}

function kodolt92(){
    for (i = 0; i < 256; i++){
        var karakter = String.fromCharCode(i);
        if (i != 0 && i % 10 == 0){
            document.getElementById('kodolt92').innerHTML += " [" + i + " = " + karakter + "] " + "<br>";
        }else{
            document.getElementById('kodolt92').innerHTML += " [" + i + " = " + karakter + "] ";
        }
    }
}

kodolt9();
kodolt92();