import axios from "axios";
import React from "react";

function kek() {
	fetch("http://pokeapi.co/api/v2/pokemon/1")
		.then(function(response) {
			return response.json();
		})
		.then(function(responseJson) {
			return console.log(responseJson.name);
		});
}

class Pokemons extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <li>{kek()}</li>;
	}
}

export default Pokemons;
