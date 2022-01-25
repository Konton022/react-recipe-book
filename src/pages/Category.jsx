import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList';

const Category = () => {
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    useEffect (()=>{
        getFilteredCategory(name).then(data=>setMeals(data.meals))
    })    
    return (
        <div className='list'>
            <MealsList meals={meals}/>
        </div>
    );
}

export default Category;
