import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList';
import Preloader from '../components/Preloader';

const Category = () => {
    const [meals, setMeals] = useState([]);

    const { name } = useParams();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className='btn'>Go Back</button>
            {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
        </>
    );
};

export default Category;
