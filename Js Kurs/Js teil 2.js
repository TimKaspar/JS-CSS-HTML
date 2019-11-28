var copyTextE = {};
function showInputN() {
    document.getElementById('displayN').innerHTML =
        document.getElementById('num').value.bold();
}
function showInputE(sender) {
    document.getElementById('displayE').innerHTML =
        sender.options[sender.selectedIndex].text.bold();
    copyTextE = sender.options[sender.selectedIndex].text;
}
function showInputP() {
    document.getElementById('displayP').innerHTML =
        document.getElementById("product").value.bold();
}   
     
    
var table = document.getElementById('myTable');

function copy() {
        var row = table.insertRow(1);
        var copyTextN = document.getElementById('num');
        var copyTextP = document.getElementById('product');

        var cell1 = row.insertCell(0);
        cell1.innerHTML = copyTextN.value + '&nbsp;';

        var cell2 = row.insertCell(1);
        cell2.innerHTML = copyTextP.value + '&nbsp;';

        var cell3 = row.insertCell(1);
        cell3.innerHTML = copyTextE + '&nbsp;';


    }









var randomTitel = Math.ceil(Math.random() * (+max - +min) + +min);
var randomPerson1 = Math.ceil(Math.random() * (+max - +min) + +min);
var randomPerson2 = Math.ceil(Math.random() * (+max - +min) + +min);
var randomAktion = Math.ceil(Math.random() * (+max - +min) + +min);
var randomSchlusssatz = Math.ceil(Math.random() * (+max - +min) + +min);

var titelRandom = titel[parseInt(randomTitel)];
var person1Random = person1[parseInt(randomPerson1)];
var person2Random = person2[parseInt(randomPerson2)];
var aktionRandom = aktion[parseInt(randomAktion)];
var schlusssatzRandom = schlusssatz[parseInt(randomSchlusssatz)];


write();

function write() {
    function writeTitel() {
        document.write(titelRandom);
    }

    function writePerson1() {
        document.write(person1Random);
    }

    function writePerson2() {
        document.write(person2Random);
    }

    function writeAktion() {
        document.write(aktionRandom);
    }

    function writeSchlusssatz() {
        document.write(schlusssatzRandom);
    }
}


