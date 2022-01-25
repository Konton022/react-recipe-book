import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealbyId } from '../api';
import MealRecipe from '../components/MealRecipe';
import Preloader from '../components/Preloader';

const Meal = () => {
    const [recipe, setRecipe] = useState({});
    const { idMeal } = useParams();

    useEffect(() => {
        getMealbyId(idMeal).then((data) => setRecipe(data.meals[0]));
    }, [idMeal]);
    return (
        <>
            {!recipe.hasOwnProperty('idMeal') ? (
                <Preloader />
            ) : (
                <MealRecipe recipe={recipe} />
            )}
        </>
    );
};

export default Meal;
