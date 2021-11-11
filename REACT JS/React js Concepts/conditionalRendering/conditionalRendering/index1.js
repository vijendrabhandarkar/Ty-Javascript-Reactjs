function App() {
  const [data, setData] = React.useState({
    admin: "Ankit",
    user: "Sanju",
    isAdmin: true,
  });
  const { admin, user, isAdmin } = data;
  let show = null;
  if (isAdmin) {
    show = (
      <div>
        <h1>{admin}</h1>
        <div>HOME</div>
        <div>LOGIN</div>
      </div>
    );
  } else {
    show = (
      <div>
        <h1>{user}</h1>
        <div>LOGIN</div>
      </div>
    );
  }
  const varify = () => {
    if (isAdmin) {
      setData({...data, isAdmin: false });

    } else {
      setData({...data, isAdmin: true });
    }
  };

  return (
    <div>
      <h1>{show}</h1>
      <button
        onClick={varify}
      >
        {isAdmin
          ? "Click here to see User View"
          : "Click here to see Admin View"}
      </button>
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById("output"));
