// plik scripts.js

alert("Podaj dane !"); 
	// deklaracja wprowadzenie zmiennych 
	liczbaa = parseInt(prompt("Podaj liczbe a"));  
	liczbah = parseInt(prompt("Podaj liczbe h")); 

// wyświetlenie zmiennych na ekranie 
document.write("<p> Liczba a = " + liczbaa + " </p> <br>");  
document.write("<p> Liczba h = " + liczbah + "</p> <br>");
 
// Obliczenia i wyświetlenie wyników 
triangleArea = ( liczbaa * liczbah / 2 ); 
	//document.write("<h4> pole =" + pole + "</h4> <br>"); 
	console.log('Pole trójkąta o podstawie a: ' + liczbaa + ' i wysokości h: ' + liczbah + ' wynosi: ' + triangleArea);