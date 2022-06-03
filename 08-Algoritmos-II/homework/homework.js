'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random() * array.length)]
  let left = [];
  let equal = [];
  let right = []

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
    left.push(array[i]);
    } 
    else if (array[i] > pivot) {
      right.push(array[i]);   
    }
    else {
      equal.push(array[i]);
    }

    
  }

  return quickSort(left).concat(equal).concat(quickSort(right));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let middle = Math.floor(array.length / 2) ;
  let left = array.slice(0,middle);
  let right = array.slice(middle);
  return merge(mergeSort(left),mergeSort(right))


}

function merge(array1,array2) {
  let unoIndex = 0;
  let dosIndex = 0;
  let array = []

  while(unoIndex < array1.length && dosIndex < array2.length) {
    if (array1[unoIndex] < array2[dosIndex]) {
      array.push(array1[unoIndex]);
      unoIndex++
    } 
    else {
      array.push(array2[dosIndex]);
      dosIndex++
    }
  }
return array.concat(array1.slice(unoIndex)).concat(array2.slice(dosIndex));

};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
