import React from 'react';
import { Link } from 'react-router-dom';

const MealsItem = (props) => {
    const {
        idMeal, 
        strMeal,
        strMealThumb
    } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
                
            </div>
            <div className='card-action'>
                <Link to={`/category/${strMeal}`} className='btn'>
                    Select Category
                </Link>
            </div>
        </div>
    );
};

export default MealsItem;
