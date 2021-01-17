import "./App.css";
import React from "react";
import dotenv from "dotenv";

dotenv.config();

const App = () => {
	console.log(process.env);
	const APP_ID = process.env.REACT_APP_APP_ID;
	const APP_KEY = process.env.REACT_APP_APP_KEY;

	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
	console.log(exampleReq);
	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-btn" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
