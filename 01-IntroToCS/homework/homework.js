'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let nuevoArray = String(num);
  let decimal = 0;
    for (let i=0 ; i < nuevoArray.length ; i++) {
      let acumulador = parseInt(nuevoArray[i])*Math.pow(2,nuevoArray.length-i-1);
      decimal += acumulador;
      
  }
  return decimal;

  

}



function DecimalABinario(num) {
  // tu codigo aca
  let x = num;
  let array = [];
  while( x / 2 >0) {
    array.unshift(x % 2);
    x = Math.floor(x/2);
  }

  return array.join("")


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}