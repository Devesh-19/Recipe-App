import "./App.css";
import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import Recipe from "./components/Recipe";
dotenv.config();

const App = () => {
	const APP_ID = process.env.REACT_APP_APP_ID;
	const APP_KEY = process.env.REACT_APP_APP_KEY;

	const [input, setInput] = useState("");
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const getRecipes = async () => {
			const response = await fetch(
				`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
			);
			const data = await response.json();
			setRecipes(data.hits);
		};

		getRecipes();
	}, [query, APP_ID, APP_KEY]);

	return (
		<div className="App">
			<form className="search-form">
				<input
					onChange={(event) => {
						const { value } = event.target;
						setInput(value);
					}}
					className="search-bar"
					type="text"
					value={input}
				/>
				<button
					onClick={(event) => {
						event.preventDefault();
						setQuery(input);
						setInput("");
					}}
					className="search-btn"
					type="submit">
					Search
				</button>
			</form>
			{recipes.map((recipe, index) => (
				<Recipe
					title={recipe.recipe.label}
					image={recipe.recipe.image}
					calories={recipe.recipe.calories}
					key={index}
					ingredients={recipe.recipe.ingredients}
				/>
			))}
		</div>
	);
};

export default App;
