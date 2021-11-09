//Named Function
function secondMax(arr, arr_size) {
  let i, first, second;

  if (arr_size < 2) {
      console.log(" Invalid Input ");
      return;
  }

  arr.sort();
  
  for (i = arr_size - 2; i >= 0; i--) {
      
      if (arr[i] != arr[arr_size - 1]) {
          console.log("The second largest element is " + arr[i]);
          return;
      }
  }

 console.log("There is no second largest element<br>");
}

var arr= [ 12, 35, 1, 10, 34, 1 ];
var n = arr.length;
secondMax(arr, n);


console.log("===========================");
// Anonymous function
var secondMax= function (arr, arr_size) {
  let i, first, second;

  if (arr_size < 2) {
      console.log(" Invalid Input ");
      return;
  }

  arr.sort();
  
  for (i = arr_size - 2; i >= 0; i--) {
      
      if (arr[i] != arr[arr_size - 1]) {
          console.log("The second largest element is " + arr[i]);
          return;
      }
  }

 console.log("There is no second largest element<br>");
}

var arr= [ 12, 35, 1, 10, 34, 1 ];
var n = arr.length;
secondMax(arr, n);

console.log("==========================");

//  IIFE Function
var secondMax = (function (arr, arr_size) {
  let i, first, second;

  if (arr_size < 2) {
      console.log(" Invalid Input ");
      return;
  }

  arr.sort();
  
  for (i = arr_size - 2; i >= 0; i--) {
      
      if (arr[i] != arr[arr_size - 1]) {
          console.log("The second largest element is " + arr[i]);
          return;
      }
  }

 console.log("There is no second largest element<br>");
});

var arr= [ 12, 35, 1, 10, 34, 1 ];
var n = arr.length;
secondMax(arr, n);

console.log("=======================");
//Arrow Function
var secondMax =  (arr, arr_size) =>{
  let i, first, second;

  if (arr_size < 2) {
      console.log(" Invalid Input ");
      return;
  }

  arr.sort();
  
  for (i = arr_size - 2; i >= 0; i--) {
      
      if (arr[i] != arr[arr_size - 1]) {
          console.log("The second largest element is " + arr[i]);
          return;
      }
  }

 console.log("There is no second largest element<br>");
};

var arr= [ 12, 35, 1, 10, 34, 1 ];
var n = arr.length;
secondMax(arr, n)