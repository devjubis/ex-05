
let fazendoString = "Minha string invertida";
let invertidaString = "";

for (let i = fazendoString.length - 1; i >= 0; i--) {
  invertidaString += fazendoString[i];
}

console.log(invertidaString); 
