// 1.named functions
function isPrime(num) {
    if(num === 2){
        return true;
        
    }else if(num >1){
        for ( var i=2; i<num ;i++){
            if(num % i!==0){
                return true;
            } else if(num ===i*i){
                return false;
            }else{
                return false;
            }
        }

    }
    else{
        return false;
    }
  }
  var Res= isPrime(8)
  console.log(Res);

// 2.Anonymous Function
var result=  function(num) {
    if(num === 2){
        return true;
        
    }else if(num >1){
        for ( var i=2; i<num ;i++){
            if(num % i!==0){
                return true;
            } else if(num ===i*i){
                return false;
            }else{
                return false;
            }
        }

    }
    else{
        return false;
    }
  }
  var Res= result(8)
  console.log(Res);

// 3.IIEF
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

      


//   4.Arrow function
var isPrime = num => {
    var boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };
  
  console.log(isPrime(8));
