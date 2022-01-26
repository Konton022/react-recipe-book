import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MealRecipe = ({ recipe }) => {
    // console.log('recipe', recipe);
    const navigator = useNavigate();
    const { idMeal, strMeal, strInstructions, strMealThumb } = recipe;
    return (
        <>
            <button className='btn' onClick={() => navigator('/')}>
                Go back
            </button>
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
        </>
    );
};

export default MealRecipe;
