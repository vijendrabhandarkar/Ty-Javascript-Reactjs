class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> Header </h1>
                <h1>Header</h1>
            </div>)
    }
}
class Content extends React.Component {
    render() {
        return <p> Welcome
            {this.props.firstName} {this.props.lastName} </p>
    }
}
class Footer extends React.Component {
    render() {
        return (<h2>Footer</h2>)
    }
}
ReactDOM.render(
    <div>
        <Header />
        <Content firstName='Sudhanshu' lastName='Prakash' />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Footer />
    </div>,
    document.getElementById('container'))