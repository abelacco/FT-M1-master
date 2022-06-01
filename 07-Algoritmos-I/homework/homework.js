'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1]
  let i = 2 // mi divisor
  while(num !== 1){
    if (num % i === 0 ){
      array.push(i);
      num = num / i;
    } else {
      i ++
    }
  }
  return array
 
}  


function bubbleSort(array) {
  let swap = true;
  while(swap) {
    swap = false;
    for(let i= 0 ; i < array.length - 1 ; i++) {
      if (array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1]
        array[i +1] = aux;
        swap = true;
      } 

      }
    }
    return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // [ 2,1,10,3,7]
  // [ 2,2,10,3,7]
  //     i = 1
  //   j = 0   
  for (let i = 1 ; i < array.length ; i++){
    let aux = array[i];  // 1
    let j = i-1  // 0
    while( j >= 0 && array[j] > aux){ // 2  > 1
      array[j+1] = array[j] // array[i] = array[j]  a[1] = a[0] = 2
      j-- // j debe disminuir para que no se haga infinito el while
                    
    }
    array[j+1] = aux;

  }
  return array;
  
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0 ; j < array.length ; j++) {
    let min = j;
    for (let i = j +1 ; i < array.length ; i++) {
      if (array[i] < array[min]){
        min = i;
      }
    }
    if(j !== min) {
      let aux = array[j];
      array[j] = array[min];
      array[min] = aux;
    }

  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
