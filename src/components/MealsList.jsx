import React from 'react';

import MealsItem from '../components/MealsItem';

const MealsList = ({ meals }) => {
    return (
        <div className='list'>
            {meals.map((item) => (
                <MealsItem key={item.idMeal} {...item} />
            ))}
        </div>
    );
};

export { MealsList };
