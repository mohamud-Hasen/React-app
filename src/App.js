import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>name: {props.name}</h1>
    <h2>lastName: {props.lastName}</h2>
    <h2>age: {props.age}</h2>
    </>
  )
}

const  App = () => {
 
  return (
    <div className="App">
      <Person name="mohamud" lastName='hassan'age={38}  />
      <Person name='alan' lastName='farah' age={28} />
      <Person name='anfac' lastName='hassan' age={28}/>
      <Person />
      <Person />
      
    </div>
  );
}

export default App;
