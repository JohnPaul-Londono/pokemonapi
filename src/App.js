import './App.css';
import { useState } from 'react';


function App() {
  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    fetch ("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setPokemon(res.results);
    })
    .catch(err => console.log(err)) 
  }


  return (
    <div className="App">
      <h1>Pokemon API Using Fetch</h1>
      <button onClick={onClickHandler} >Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((pokemon, i ) => {
            return <li key= {i}>{pokemon.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;


