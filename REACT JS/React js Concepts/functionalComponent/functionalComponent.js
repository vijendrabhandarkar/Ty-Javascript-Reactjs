function Header(props) {
    return <h1>Header {props.logo} {props.brand} {props.price}</h1>
}

function Content(props) {
    return <p>Welcome {props.userName} </p>
}

function Footer({ person }) {
    return <h2>Footer  {person.firstName}</h2>
}

ReactDOM.render(<div>
    <Header logo='car.jpg' brand='Volvo' price="12000000" />
    <Content userName='Ajay' />
    <Footer person={{ firstName: 'Ajay', lastName: 'KK' }} />
</div>, document.getElementById('container'))