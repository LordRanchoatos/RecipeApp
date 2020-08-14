import React from 'react';

const ARecipe = ( { title, calories, image, ingredients }) => {
    
    return(
        <div className="recipe">
            <h3>{title}</h3>
            <ol>{ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p style={{color: "grey", fontWeight: "bold"}}>Energy content: {Math.floor(calories)} Calories</p>
            <img src={image} alt='meal'/>
        </div>
    )
}

export default ARecipe;