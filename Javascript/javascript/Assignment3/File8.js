// 1.named Function
function reverse(str) {
    var chars = str.split("");
    var length = chars.length;
    var half = length / 2;
    for (var ii = 0; ii < half; ii++) {
      var temp = chars[ii];
      var mirror = length - ii - 1;
      chars[ii] = chars[mirror];
      chars[mirror] = temp;
    }
    return chars.join("");
  }
  
  console.log(reverse("abcd"));
//   2.Anonymous function
var reverse=function(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
var res=reverse(`Abcd`)
console.log(res);
//  3.IIEF

(function (str){
    var reverse=function(str) {
        let newStr = '';
        for(let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
    }
    
    

});var res=reverse(`WESI`)
console.log(res)
// 4.Arrow Function
var reverseString = () => {
    var str=`Jhon`
    let temp = "";
    for (let i = str.length; i >= 0; i--) {
    temp += str.charAt(i);
    }
    return temp;
    };
    
    console.log(reverseString());

