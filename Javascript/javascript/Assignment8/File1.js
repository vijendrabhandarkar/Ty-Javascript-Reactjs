// Example for promises
var promise = new Promise(function(resolve, reject) {
    const x = "ABCDEFGHJ";
    const y = "ABCDEFGHJ"
    if(x === y) {
      resolve();
    } else {
      reject();
    }
  });
    
  promise.
      then(function () {
          console.log('Success, This is matching');
      }).
      catch(function () {
          console.log('Some error has occured');
      });


     // Example for Promise Resolved
var promise = new Promise(function(resolve, reject) {
    resolve('ABCD For ABCD');
})
  
promise
    .then(function(successMessage) {
       //success handler function is invoked
        console.log(successMessage);
    }, function(errorMessage) {
        console.log(errorMessage);
    })


    // Example for Promise Rejected
    var promise = new Promise(function(resolve, reject) {
        reject('Promise Rejected')
    })
      
    promise
        .then(function(successMessage) {
            console.log(successMessage);
        }, function(errorMessage) {
           //error handler function is invoked
            console.log(errorMessage);
        })