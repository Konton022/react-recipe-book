import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';

const Category = () => {
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    useEffect (()=>{
        getFilteredCategory(name).then(data=>setMeals(data.meals))
    })    
    return (
        <div>
            {meals.length}
        </div>
    );
}

export default Category;
