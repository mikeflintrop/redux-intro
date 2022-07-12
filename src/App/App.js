// import logo from './logo.svg';
import './App.css';
// useSelector is a hook from react-redux library
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import ElementList from '../ElementList/ElementList';
import ElementForm from '../ElementForm/ElementForm';

function App() {
  // useSelector accepts a function that says what part of the store you want
  // Here we returned the whole store
  // const reduxStore = useSelector(store => store);
  const count = useSelector(store => store.count);
  // const elementList = useSelector(store => store.elementList);

  // const [newElement, setNewElement] = useState('');

  // Dispatch is how we talk to redux from react
  const dispatch = useDispatch();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   dispatch({
  //     type: 'ADD_ELEMENT',
  //     payload: newElement
  //   });
    
  //   setNewElement('');
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* render entire reduxStore to our DOM as a JS Object (JSON) */}
        {/* <pre>{JSON.stringify(reduxStore)}</pre> */}
      </header>

      <p>Count is: {count}</p>

      {/* dispatching action when button is clicked */}
      <button onClick={() => dispatch({type: 'INCREASE'})}>Increase!</button>
      <button disabled={count < 1} onClick={() => dispatch({type: 'DECREASE'})}>Decrease!</button>

      <ElementForm />

      {/* <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Element Name"
          value={newElement}
          onChange={(event) => setNewElement(event.target.value)}
        />
        <button type="submit">Add</button>
      </form> */}

      <ElementList />

      {/* <button onClick={() => dispatch({type: 'ADD_ELEMENT', payload: 'hydrogen'})}>Add Element</button> */}
      {/* <ul>
        {elementList.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
