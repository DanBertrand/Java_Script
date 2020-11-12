let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");



let y = "#";
let space = " "

for (i = 0; i <= floors; i++) {
	pad = floors - i;
  console.log(" ".repeat(pad) + y.repeat(i));
} 



