// // (1).Prime or not
// // const number = parseInt(prompt("Enter the number:"));
// // let isPrime = true;
// // if (number === 1){
// //     console.log("1 is niether prime nor composite number");
// // }
// // else if(number>1){
// //     for(let i =2;i<number;i++){
// //         if(number%i==0){
// //             isPrime = false;
// //             break;
// //         }
// //     }
// //     if(isPrime){
// //         console.log("prime number");
// //     }
// //     else{
// //         console.log("not prime");
// //     }
// // }
// // (2) even or odd
// // const number = prompt("Enter the number:")
// // if (number %2 == 0){
// //     console.log("Even");
// // }
// // else{
// //     console.log("odd");
// // }
// // (3)
// // const arr =[10,20,30,50,40]
// // let i,largest,second
// // if (arr[0]>arr[1]){
// //     largest = arr[0];
// //     second = arr[1];
// // }else{
// //     largest = arr[1];
// //     second = arr[0]
// // }
// // for (i=2;i<arr.length<i++){
// //     if(largest<arr[i]){
// //         second = largest;
// //         largest = arr[i];
// //     }
// //     else if(second<arr[i]){
// //         second = arr[i]
// //     }
// // }
// // console.log(second);
//  const arr = [10,20,40,50]
// let i, largest,second;
// if(arr[0]>arr[1]){
//     largest = arr[0];
//     second = arr[1]
// }else {
//     largest = arr[1];
//     second = arr[0];
// }
// for (i=2;i<arr.length; i++){
//     if (largest<arr[i]){
//         second = largest;
//         largest = arr[i];
//     }else if(second < arr[i]){
//         second = arr[i]
//     }
// }
// console.log(second);