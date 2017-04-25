// plik scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allnames = femaleNames.concat( maleNames );
console.log(allnames);

var newName = 'Marian'	
if ( allnames.indexOf(newName) === -1 ){
	var x = allnames.push ( newName );
}
console.log(allnames);