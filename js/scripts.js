// plik scripts.js

alert("Podaj dane !"); 
// deklaracja wprowadzenie zmiennych 
var liczbaa = parseInt(prompt("Podaj liczbe a"));  
var liczbab = parseInt(prompt("Podaj liczbe b")); 

// wyświetlenie zmiennych na ekranie 
document.write("<p> Liczba a = " + liczbaa + " </p> <br>");  
document.write("<p> Liczba b = " + liczbab + "</p> <br>");

//wynik
value = (liczbaa * liczbaa) + (2 * liczbaa * liczbab) - (liczbab * liczbab); 
console.log('liczba a: ' + liczbaa + ' liczba b: ' + liczbab + ' wynosi: ' + value); 

//sprawdzenie wyniku czy liczba jest dodatnia czy ujemna
if (value <= '0' ) {
	console.log('wynik jest ujemny');
} else {
	console.log('wynik jest dodatni');
}

//sprawdzenie czy wynik jest równy 0
if (value == '0' ) {
	console.log('wynik jest równy 0');
} else {
	console.log('wynik jest różny od 0');
}