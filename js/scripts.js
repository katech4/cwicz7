// plik scripts.js

var text = ( 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.' );
var animal = ( 'Zielone słonie' );
var animalUpperCased = animal.toUpperCase();
console.log( animalUpperCased );

var textCharsAfter = text.replace( 'Papugi', animalUpperCased );
console.log( textCharsAfter );
console.log( textCharsAfter.length / 2 );

var partOfMotto = textCharsAfter.slice( 0 , 45 );
console.log( partOfMotto );