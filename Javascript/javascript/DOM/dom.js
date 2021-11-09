const element = document.getElementById('test')
console.log('element',element);

console.log(element.innerText);
console.log(element.innerHTML);
console.log(element.textContent);


// element.innerText='<button>Good Afternoon</button>'
element.innerHTML='<button>Good Afternoon</button>'


document.write('Welcome to JS class')
const pElement = document.createElement('p')
console.log(`pElement`,pElement);
pElement.textContent = `Monday mock`
console.log(`pElement`,pElement);
document.body.appendChild(pElement)

element.insertAdjacentHTML(`afterend`,`<p>monday strict Mock</p>`);

console.log(`------------------------------------------------`);

// getElementsByTagName return the array
const h1Elements =document.getElementsByTagName('h1')
console.log(`h1Elements -`,h1Elements);

// getElementsByClassName return the array

// const demoClassElements = document.getElementsByClassName('demo')
// console.log(`democlassElements -`,demoClassElements);

const demoClassElements = document.querySelectorAll('.demo')
console.log(`democlassElements -`,demoClassElements);

//querySelector return the element
const h1Element = document.querySelector('h1')
console.log(`h1Elements -` ,h1Element);

// querySelectorAll return the array
const pElements = document.querySelectorAll('p')
console.log(`pElements -` ,pElements);


element.style.color ='lightblue'
element.style.background ='green'
element.style.width = '120px'
element.style.textAlign = 'center'


const randomTextElement = document.getElementById('randomText')
// randomTextElement.className = 'randomStyle'
randomTextElement.classList = 'randomStyle randomStyle1'

for (const i=0 ;i<demoClassElements.length; i++){
    demoClassElements[i].className='randomStyle'
}
