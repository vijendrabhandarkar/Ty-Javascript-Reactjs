console.log('JS started');

const getEmployeeIDs = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([1,5,6,8,9])
    }, 2000)
})

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err=>{
      console.log('Error is ', err);
  })

  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => {
      console.log(response);
        if(response.status === 200) {
            return response.json()
        }
  })
  .then(json => console.log(json))
  .catch(err=>{
      console.log('Error is ', err);
  })
getEmployeeIDs.then(ids=>{
    console.log(ids);
}).catch(err=>{
    console.error(err);
})
console.log('JS ended');