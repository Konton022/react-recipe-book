import React from 'react';
import { Link } from 'react-router-dom';

const MealRecipe = ({ recipe }) => {
    console.log('recipe', recipe);
    const { idMeal, strMeal, strInstructions, strMealThumb } = recipe;
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{}</span>
                <p>{strInstructions}</p>
            </div>
            <div className='card-action'>
                <Link to={`/`} className='btn'>
                    Go to home Page
                </Link>
            </div>
        </div>
    );
};

export default MealRecipe;
