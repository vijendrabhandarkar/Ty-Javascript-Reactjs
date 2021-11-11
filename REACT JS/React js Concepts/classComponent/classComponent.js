class Header extends React.Component {
    render() {
        return <h1> Header </h1>
    }
}
class Content extends React.Component {
    render() {
        return <p> Content </p>
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
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Footer />
    </div>,
    document.getElementById('container'))