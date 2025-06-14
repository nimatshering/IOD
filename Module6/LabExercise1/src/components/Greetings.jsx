function Greetings(props) {
  return (
    <div>
      {props.name ? <h1>Name: {props.name}</h1> : <h1>Hello World !!!</h1>}
      {props.children}
    </div>
  );
}

export default Greetings;
