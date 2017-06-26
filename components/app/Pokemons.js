import axios from "axios";
import React, {Component} from "react";

const saiDaPokebola = pokemonName => `http://pokeapi.co/api/v1/pokemon/${pokemonName}`;

class Pokemons extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){
		fetch(saiDaPokebola(this.props.pokemonName))
			.then(d => d.json())
			.then(d => {
				pokemonData: d
			})
	}

	render(){
		if(!this.state.pokemonData) return(<p>Loading</p>)
			return(
				<div>
					<h2>{this.state.pokemonData.name}</h2>
				</div>
			)
		}


}


export default Pokemons;
