// 1.Named Function
function bblsort(arr){
    for (var i = 0; i<arr.length; i++){
        for (var j=0; j<(arr.length-i-1); j++){
            if(arr[j]>[arr[j+1]]){
                var temp= arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}
var arr=[234,43,55,63,5,6,235,54]
bblsort(arr);

// 2.Anonymous Function
var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);

// 3.IIEF
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
const array1 = [2, 1, 3, 7, 6, 5];
const array2 = bubbleSort(array1);
console.log(array2);

// 4.Arrow function
var bubble_Sort = (nums) => {
    if(!Array.isArray(nums)) return -1; 
    if(nums.length<2) return nums; 
  
      let swapped=false
       temp=0,
       count=-1,
       arrLength=0;
  
  
      do{
        count ++;
        swapped=false;
        arrLength = (nums.length-1) - count; 
        for(let i=0; i<=arrLength; i++){
            if(nums[i]>nums[i+1]){
              temp=nums[i+1];
              nums[i+1]=nums[i];
              nums[i]=temp;
              swapped=true;
            }
        }
      }
  
      while(swapped)
      return nums;
    }
    console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]))



