var titel =['FAST NICHT ZU GLAUBEN',
    'BESTE IDEE EUW',
    'WIE EINE HAUSKATZE',
    'OHNE GRUND',
    'DIE HEUTIGE JUGEND',
    'IST DAS IN WIRKLICHKEIT DARTH VADER?',
    'CREATIVER GEHTS NICHT MEHR',
    'EINE KLASSISCHE KOMÖDIE'];

var person1 = ['Ein 12-Jähriger E-Sportler',
    'Ein grimmiger Reiter',
    'Der Hund von Vladimir Putin',
    'Ein profi Schlittler',
    'Ein sprechendes Tram',
    'Ein alter Dachziegel',
    'Ein rappendes Grosi',
    'Eine schwangere Kuh'];

var person2 = ['ein aus dem Area 51 geflüchteter Alien',
    'Pewdiepie',
    'ein paar Schlümpfe',
    'drei Boxer',
    'einige einsame Asoziale',
    'ein drei Köpfiger T-Rex',
    'ein Mädchen mit einem Fake Gucci Puli',
    'ein alter Man mit einem Bierdeckel als Ohrenring'];

var aktion =[' zerstörten Capital Bra in einem Rap Battle.',
    ' retteten die Welt vom Doomsday.',
    ' frasen einem Schaf das Gras weg.',
    ' segelten über den Zürisee.',
    ' fanden ein Easteregg in Fortnite.',
    ' assen mit ihren 20 Kollegen in einem drei Stern Restaurant.',
    ' feierten ihre Hochzeit.',
    ' veranstalteten am Zürifest eine Wasserschlacht.'];

var schlusssatz = [' Eine riesen Tragödie.',
    ' Und wenn sie noch nicht gestorben sind, dann leben sie noch heute.',
    ' Sie schafften es auch ohne Super Man.',
    ' Eine der schlechtesten Geschichten Überhaupt!',
    ' Es währe ohne Doping nicht möglich gewessen.',
    ' Will Smith wird Morgen das gleiche passieren.',
    ' Wie in den guten alten Zeiten.',
    ' Obwohl es regnete.'];

var min=-1;
var max=7;

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

console.log(randomTitel);
console.log(randomPerson1);
console.log(randomPerson2);
console.log(randomAktion);
console.log(randomSchlusssatz);


writeTitel();
writePerson1();
writePerson2();
writeAktion();
writeSchlusssatz();

    function writeTitel() {
        document.write('<h1>'+ titelRandom + '</h1>' + '<br>');
    }

    function writePerson1() {
        document.write(person1Random+ ' und ');
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

    function Reload(){
        var button = document.createElement('Reload');
        button.onclick = location.reload();
    }

