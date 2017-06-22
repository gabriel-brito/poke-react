import React from 'react';
import ReactDOM from 'react-dom';
import Pokemons from './Pokemons';

class Pokedex extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<h1>MC LAN NOVAMENTE!</h1>
				<Pokemons />
			</div>
		);
	}
};

export default Pokedex;