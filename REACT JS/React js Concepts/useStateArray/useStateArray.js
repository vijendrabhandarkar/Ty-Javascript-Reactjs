function MyApp() {
    const [bikes, setBikes] = React.useState(['BMW', 'Ninja', 'Bullet', 'KTM'])
    const removeKTM = () => {
        const indexOfKTM = bikes.indexOf('KTM')
        console.log(indexOfKTM);
        if (indexOfKTM >= 0) {
            bikes.splice(indexOfKTM, 1);
            setBikes([...bikes]);
        }
    };
    return (
        <div>
            {bikes.map((bikes, index) => {
                return <p key={index}>{bikes}</p>;
            })}
            <button onClick={removeKTM}>Remove KTM</button>
        </div>
    )
}
ReactDOM.render(<MyApp />, document.getElementById('container'))