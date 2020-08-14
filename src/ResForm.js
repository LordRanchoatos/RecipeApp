import React from 'react';
import ARecipe from './ARecipe';

function  ResForm({ allRecipes }){
    if (allRecipes.length === 0) {
            return(
                <h2 style={{color: "Red", textAlign: "center", fontSize: "bold"}}>SORRY! Search content not available, check your input and try again....</h2>
            )
        }
    return (
        <div className="recipes">
            { allRecipes.map(Recipe =>(
                <ARecipe 
                key={Recipe.recipe.label} 
                recipe={Recipe} 
                title={Recipe.recipe.label}
                calories={Recipe.recipe.calories}
                image={Recipe.recipe.image}
                ingredients={Recipe.recipe.ingredients}
                />
            ))
            }
        </div>
    )
}
export default ResForm;