// // // // // // // // // // // // // // // // // // Prime or not
// // // // // // // // // // // // // // // // // const number = parseInt(prompt("Enter the Positive number:"));
// // // // // // // // // // // // // // // // // let isPrime = true;
// // // // // // // // // // // // // // // // // if(number === 1){
// // // // // // // // // // // // // // // // //     console.log("1 is neither prime nor composite number.");
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // else if(number>1){
// // // // // // // // // // // // // // // // //     for(let i =2; i<number; i++){
// // // // // // // // // // // // // // // // //         if (number%i == 0){
// // // // // // // // // // // // // // // // //             isPrime = false;
// // // // // // // // // // // // // // // // //             break;
// // // // // // // // // // // // // // // // //         }
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     if(isPrime){
// // // // // // // // // // // // // // // // //         console.log("prime number");
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     else{
// // // // // // // // // // // // // // // // //         console.log("not prime number");
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // even or odd
// // // // // // // // // // // // // // // // const number = prompt("Enter the number:");
// // // // // // // // // // // // // // // // if (number %2==0){
// // // // // // // // // // // // // // // //     console.log("Even");
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // else{
// // // // // // // // // // // // // // // //     console.log("odd");
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // const arr =[1,3,2]
// // // // // // // // // // // // // // // console.log(Math.max(...arr));
// // // // // // // // // // // // // // // console.log(Math.max(1,3,2));
// // // // // // // // // // // // // // function bubbleSort(arr){
// // // // // // // // // // // // // //     for (let i =0 ; i<arr.length ;i++){
// // // // // // // // // // // // // //         for(let j=0; j<arr.length-i-1; j++){
// // // // // // // // // // // // // //             if (arr[j+1]<arr[j]){
// // // // // // // // // // // // // //                 [arr[j+1],arr[j]]= [arr[j],arr[j+1]]
// // // // // // // // // // // // // //             }
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     return arr;
// // // // // // // // // // // // // // }console.log(bubbleSort([5,6,4,8,70]));
// // // // // // // // // // // // // function inerstionSort(arr){
// // // // // // // // // // // // //     for (let i=0; i<arr.length; i++){
// // // // // // // // // // // // //         for (let j=i-1; j>-1; j--){
// // // // // // // // // // // // //             if(arr[j+1]<arr[j]){
// // // // // // // // // // // // //                 [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
// // // // // // // // // // // // //             }
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     return arr;

// // // // // // // // // // // // // }console.log(inerstionSort([5,48,41,74]));
// // // // // // // // // // // // const number = prompt("Enter the positive number:");
// // // // // // // // // // // // let n1=0,n2=1,nextTerm
// // // // // // // // // // // // console.log("Fibannoci series");
// // // // // // // // // // // // console.log(n1);
// // // // // // // // // // // // console.log(n2);
// // // // // // // // // // // // nextTerm = n1+n2;
// // // // // // // // // // // // while(nextTerm<=number){
// // // // // // // // // // // // console.log(nextTerm);
// // // // // // // // // // // // n1= n2;
// // // // // // // // // // // // n2 = nextTerm;
// // // // // // // // // // // // nextTerm = n1+ n2;
// // // // // // // // // // // // }

// // // // // // // // // // // const number =  parseInt(prompt("Enter the positive intger:"));
// // // // // // // // // // // if (number < 0){
// // // // // // // // // // //     console.log("error! Factorial for negative number is doesnot exists");
// // // // // // // // // // // }
// // // // // // // // // // // else if (number ===0){
// // // // // // // // // // //     console.log(`the factorial of ${number} is 1.` );
// // // // // // // // // // // }
// // // // // // // // // // // else {
// // // // // // // // // // //     let fact = 1
// // // // // // // // // // //     for (i=1;i<=number;i++){
// // // // // // // // // // //     fact*=i
// // // // // // // // // // // }
// // // // // // // // // // // console.log(`The factorial of ${number} is ${fact}.`);
// // // // // // // // // // // }

// // // // // // // // // // const arr = [10,20,40,50]
// // // // // // // // // // let i, largest,second;
// // // // // // // // // // if(arr[0]>arr[1]){
// // // // // // // // // //     largest = arr[0];
// // // // // // // // // //     second = arr[1]
// // // // // // // // // // }else {
// // // // // // // // // //     largest = arr[1];
// // // // // // // // // //     second = arr[0];
// // // // // // // // // // }
// // // // // // // // // // for (i=2;i<arr.length; i++){
// // // // // // // // // //     if (largest<arr[i]){
// // // // // // // // // //         second = largest;
// // // // // // // // // //         largest = arr[i];
// // // // // // // // // //     }else if(second < arr[i]){
// // // // // // // // // //         second = arr[i]
// // // // // // // // // //     }
// // // // // // // // // // }
// // // // // // // // // // console.log(second);

// // // // // // // // // function greeting(name){
// // // // // // // //     //     alert('hello'+name);
// // // // // // // //     // }
// // // // // // // //     // function userinput(callback){
// // // // // // // //         //     var name = prompt("please enter the name");
// // // // // // // //         //  callback(name);
// // // // // // // //         // }
// // // // // // // // // userinput(greeting);

// // // // // // // // // var promise = new promise(function(resolve,reject){
// // // // // // // // //     var x =10;
// // // // // // // // //     var y =10;
// // // // // // // // //     if(x === y){
// // // // // // // // //         resolve();
// // // // // // // // //     }else{
// // // // // // // // //         reject();
// // // // // // // // //     }
// // // // // // // // // })

// // // // // // // // // promise.then(function(){
// // // // // // // // //     console.log("equal");
// // // // // // // // // }).catch(function(){
// // // // // // // // //     console.log("some Error");
// // // // // // // // // })


// // // // // // // // // const getData = async() =>{
// // // // // // // // //     var data = await "hell0 world";
// // // // // // // // //     return data;
// // // // // // // // // }
// // // // // // // // // console.log(1);
// // // // // // // // // getData();
// // // // // // // // // console.log(2);
 
// // // // // // // // // promises
// // // // // // // // // new Promise ((resolve,reject)=>{
// // // // // // // // //     var result = true;
// // // // // // // // //     if (result ){

// // // // // // // // //     }else{

// // // // // // // // //     }
// // // // // // // // // }).then((message)=>{
// // // // // // // // //     console.log(message);
// // // // // // // // // }),(massage) => {
// // // // // // // // //     console.log(message);
// // // // // // // // // }
// // // // // // // // const person ={
// // // // // // // //     name : "Ravi",
// // // // // // // //     age :  "27",
// // // // // // // //     address : "Patna"
// // // // // // // // }
// // // // // // // // const {
// // // // // // // //     name : fullName,
// // // // // // // //     age,
// // // // // // // //     address
// // // // // // // // }=person
// // // // // // // // console.log(person.name);
// // // // // // // // console.log("name",fullName);
// // // // // // // // console.log(person);
// // // // // // // // // const i =0;
// // // // // // // // // function func(){
// // // // // // // // //     console.log("hello");
    
// // // // // // // // // }
// // // // // // // // // setInterval(func,100)
// // // // // // // // // ASYNC AWAIT
// // // // // // // //  async function func(){
// // // // // // // //     console.log("START");

// // // // // // // //     let promise = new promise((resolve,reject) =>{
// // // // // // // //         setTimeout(()=>{
// // // // // // // //             resolve("MID")
// // // // // // // //         },4000)

// // // // // // // //     });
// // // // // // // //     let result =await promise;
// // // // // // // //     console.log(result);
// // // // // // // //     console.log("FINISHED");
// // // // // // // // }

// // // // // // // console.log("Wake up At 6:00");
// // // // // // // // async function func(){
// // // // // // // // let promise1 = new Promise((resolve,reject)=>{
// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("Fresh Up");
// // // // // // // // },2000)
// // // // // // // // })}
// // // // // // // // let result = await promise1
// // // // // // // // console.log(result);


// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("cook");
// // // // // // // // },10000)
// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("Breakfast");
// // // // // // // // },5000)
// // // // // // // // setTimeout(()=>{
// // // // // // // //     console.log("Travel to office");
// // // // // // // // },3000)

// // // // // // // // console.log("office");

// // // // // // // let p = timeout = new Promise((resolve,reject)=>{
// // // // // // //     setTimeout(()=>{
// // // // // // //           console.log("Fresh UP");
// // // // // // //     },!2000)
// // // // // // // })
// // // // // // // let p1 = new Promise((resolve,reject)=>{
// // // // // // //     setTimeout(()=>{
// // // // // // //           console.log("Cook");
// // // // // // //     },!10000)
// // // // // // // })
// // // // // // // let p2= new Promise((resolve,reject)=>{
// // // // // // //     setTimeout(()=>{
// // // // // // //           console.log("Break fast");
// // // // // // //     },!5000)
// // // // // // // })
// // // // // // // let p3 = new Promise((resolve,reject)=>{
// // // // // // //     setTimeout(()=>{
// // // // // // //           console.log("Travel to office");
// // // // // // //     },!3000)
// // // // // // // })
// // // // // // // // console.log("Office");
// // // // // // async function add(){
// // // // // // const SetTimeoutPromise = timeout =>new Promise(resolve =>{
// // // // // //     setTimeout(resolve,timeout)
        
    
// // // // // // });
// // // // // //  let result =  await SetTimeoutPromise(2000);
// // // // // //  console.log(result);
// // // // // // }
// // // // // // add()
// // // // // console.log("Wake up At 6:00");
// // // // // async function func(){
// // // // // let promise1 = new Promise((resolve,reject)=>{
// // // // // setTimeout(()=>{
// // // // //     console.log("Fresh Up");
// // // // // },2000)
// // // // // })}
// // // // // let result = await promise1
// // // // // console.log(result);


// // // // // setTimeout(()=>{
// // // // //     console.log("cook");
// // // // // },10000)
// // // // // setTimeout(()=>{
// // // // //     console.log("Breakfast");
// // // // // },5000)
// // // // // setTimeout(()=>{
// // // // //     console.log("Travel to office");
// // // // // },3000)
// // // // // func()

// // // // // console.log("office");
// // // // async function func(){
// // // //     console.log("wake up at 6:00");
  
// // // //   let promise1 = new Promise((resolve,reject)=>{
// // // //     setTimeout(()=>{
// // // //       resolve("freshup")
// // // //     },2000)
// // // //   });
// // // //   let result1 = await promise1;
// // // //   console.log(result1);

// // // //   let promise2 = new Promise((resolve,reject)=>{
// // // //     setTimeout(()=>{
// // // //       resolve("cook")
// // // //     },10000)
// // // //   });
// // // //   let result2 = await promise2;
// // // //   console.log(result2);


// // // //   let promise3 = new Promise((resolve,reject)=>{
// // // //       setInterval(() => {
// // // //           resolve("Break fast")
// // // //       }, 5000);
// // // //   });
// // // //   let result3 = await promise3;
// // // //   console.log(result3);


// // // //   let promise4 = new Promise((resolve,reject)=>{
// // // //       setTimeout(() => {
// // // //           resolve("Travel to office")
// // // //       }, 3000);
// // // //   });
// // // //   let result4 = await promise4;
// // // //   console.log(result4);

// // // //   console.log("office");
// // // // }
// // // // func()

// // // const person ={
// // //   name:`Sam`,
// // //   age : 26,
// // //   address:{
// // //     pincode:560012,
// // //     city:`bengalore`
// // //   }

// // // }
// // // // Shallow copy
// // // const person1 = Object.assign({},person);
// // // // console.log(person1);
// // // person1.name = `Tom`
// // // console.log(person1);

// // // // Deep copy
// // // const person2 = JSON.parse(JSON.stringify(person))
// // // console.log(person2);
// // // person2.name =`Ajay`
// // // console.log(person2);
// // // console.log(person);
// // // 

// // // spread operator
// // const arr = [1,2,3]
// // const arr1 = [5,6,7]
// // console.log(...arr,...arr1);

// // // rest operator

// // function args(...nums){
// //   let sum =0 ;
// //   for(let i=0;i<nums.length;i++){
// //     sum = sum + nums[i]
// //   }
// //   console.log('nums',nums);
// // }
// // args(10,20,30,40)
// // console.log(Math.random(1.2));


// const str = [10,20,30]
// const str1 = str.map(x=>x*20)
// console.log(str1);


// const words = ['spary',`water`,`elephant`]
// const ele= words.filter(word=>word.length>6)
// console.log(ele);