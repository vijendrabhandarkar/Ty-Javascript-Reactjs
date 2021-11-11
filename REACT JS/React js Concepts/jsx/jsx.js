// const element = <h1 id="demo" > Hello World</h1>
// ReactDOM.render(element, document.getElementById('container'))



const mobiles = ['Honor', 'Infinix', 'Lava', 'Micromax']

const items = <h1>
    {mobiles.map((mobile, Index) => {
        return <li key={Index}>{mobile}</li>
    })}
</h1>
ReactDOM.render(items, document.getElementById('container'))


const username = 'Raj'
const element = <h1 id='demo'>Welcome ,{username}</h1>
ReactDOM.render(element, document.getElementById('container'))

