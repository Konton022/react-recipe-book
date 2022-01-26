import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList';
import Preloader from '../components/Preloader';

const Category = () => {
    const [meals, setMeals] = useState([]);
    const navigator = useNavigate();

    const { name } = useParams();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className='btn' onClick={() => navigator('/')}>
                Go Back
            </button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
};

export default Category;
