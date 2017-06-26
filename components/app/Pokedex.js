import React from 'react';
import ReactDOM from 'react-dom';
import Pokemons from './Pokemons';


const Pokedex = React.createClass({
	render(){
		return(
			<div className="app">
				<Pokemons pokemonName="charmander" />
			</div>
		)
	}

});

export default Pokedex;