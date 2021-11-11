const createList = React.createElement('ul', null,
    React.createElement('li', { id: 'car' }, 'CAR'),
    React.createElement('li', { id: 'jeep' }, 'JEEP'))
//console.log(createList);

const mobiles = ['Xiaomi', 'Realme', 'Apple', 'Oneplus', 'Samsung']
const mobilesItem = React.createElement('ul', null,
    mobiles.map((mobile, Index) => {
        return React.createElement('li', { key: Index }, mobile)
    }))
//console.log(mobilesItem);

//ReactDOM.render(createList, document.getElementById('container'))
//ReactDOM.render(mobilesItem, document.getElementById('container'))
const allItems = React.createElement('div', null, createList, mobilesItem)
console.log(allItems);
ReactDOM.render(allItems, document.getElementById('container'))

