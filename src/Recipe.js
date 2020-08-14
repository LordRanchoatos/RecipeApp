import React, { useState, useEffect } from 'react';
import Search from './Search';
import ResForm from './ResForm';
import './style.css';


 const Recipe = () => {
    const APP_ID = "cdd7a808";
    const APP_KEY = "14e23c6b0758754c9e187a0c5a123a93";

    
    const [allRecipes, setAllRecipes] = useState([]);
    const [search, setSearch] = useState("chicken");

    useEffect(()=>{
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => response.json())
        .then(response => {
            setAllRecipes(response.hits)
        })
    }, [search])

    const getQuery = (query) => {
        setSearch(query);
    }

    
     return (
         <div className="center">
             <div className="header">
                <h1 style={{color: "red"}}>RecipeBank.com</h1>
                <p>Search the recipes to prepare your favourite meals</p>
             </div>
             <Search getQuery={getQuery}/>
             <ResForm allRecipes={allRecipes}/>

             <footer style={{color: "white", textAlign: "center", fontSize: "bold"}}>made with love by Lord_Ranchoatos.</footer>
         </div>
     )

 }
export default Recipe;