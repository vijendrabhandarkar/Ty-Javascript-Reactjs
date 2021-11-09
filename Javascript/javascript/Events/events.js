function showName(){
    const h1Element = document.querySelector('.showHideName');
    console.log(h1Element);
    h1Element.style.display = 'block'
    

}

function hideName(){
    const h1Element = document.querySelector('.showHideName');
    console.log(h1Element);
    h1Element.style.display = 'none'

}
function showHideName(){
    const h1Element = document.querySelector('.showHideName');
    if(h1Element.style.display === 'block'){
        h1Element.style.display = 'none'
    }else{
        h1Element.style.display = 'block'
    }

}
function showItem(){
    const h1Element = document.querySelector('.showHideItem');
    h1Element.style.visibility = 'visible'
}
function hideItem(){
    const h1Element = document.querySelector('.showHideItem');
    h1Element.style.visibility = 'hidden'
}

function getPrice (){
    console.log('price');
    const priceElement = document.getElementById('price')
    console.log('value -',priceElement.value);
   
}

function showPrice (){
    console.log(`Show price`);
    const priceElement = document.getElementById(`price`)
    console.log(`value -`,priceElement.value);
    const divElement = document.getElementById('priceValue')
    divElement.innerText = priceElement.value;
}

const buttonEle = document.getElementById(`clickEvent`)
buttonEle.addEventListener(`click`,function(event){
    console.log(`Clicked`);
    console.log(event);
})

buttonEle.addEventListener(`mouseover`,function(){
    console.log(`mouse over`);
})
const inputEle = document.getElementById(`nameValue`)
inputEle.addEventListener(`keyup`,(event)=>{
    console.log(event);
    if (event.key === `Enter`){
        console.log(`Value -`,event.target.value);
    }
})
const butEle = document.getElementById(`checkAgree`)
butEle.addEventListener(`click`,()=>{
    document.getElementById(`Agree`).checked = true
})

