// plik scripts.js

alert("Podaj dane !"); 
// deklaracja funkcji
	var liczbaa = parseInt(prompt("Podaj liczbe a"));  
	var	liczbah = parseInt(prompt("Podaj liczbe h")); 
		
	getTriangleArea(a, h) {
	if (a >= '0' , h >= '0' ) {
	console.log('dane prawidlowe');
	} else {
	console.log('nieprawidłowe dane');
	}
	return (liczbaa * liczbah / 2);
	}
	console.log( getTriangleArea(10,6) );