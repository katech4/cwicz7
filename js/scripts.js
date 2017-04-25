// plik scripts.js

function drawTree(n) {
	for (i=1;i<=n;i++) {
		for(j=n-1; j>=i; j--) star = '*';
		for(j=1; j<=(2*i-1); j++) document.write("*");
		document.write("<br />")
	}
console.log(star);
}
ileWierszy = parseInt(prompt("Podaj ilość wierszy:"));
drawTree(ileWierszy);