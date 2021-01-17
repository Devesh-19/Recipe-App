import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div>
			<h1>{title}</h1>
			<img src={image} alt="" />
			<p>Calories : {calories}</p>
			<h3>Ingredients:</h3>
			<ul style={{ listStyleType: "none" }}>
				{ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
