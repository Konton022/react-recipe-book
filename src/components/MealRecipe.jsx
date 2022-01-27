import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MealRecipe = ({ recipe }) => {
    // console.log('recipe', recipe);
    const navigator = useNavigate();
    const {
        idMeal,
        strMeal,
        strInstructions,
        strMealThumb,
        strCategory,
        strYoutube,
    } = recipe;
    return (
        <>
            <button
                className='btn'
                onClick={() => navigator(`/category/${strCategory}`)}
            >
                Go back
            </button>
            <div className='card'>
                <div className='card-image'>
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className='card-content'>
                    <span className='card-title'>{strMeal}</span>
                    <p>{strInstructions}</p>
                    <div className='card-content'>
                        <table className='centered'>
                            <thead>
                                <tr>
                                    <th>Ingredients</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (
                                        key.includes('Ingredient') &&
                                        recipe[key]
                                    ) {
                                        console.log(recipe[key]);
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>
                                                    {
                                                        recipe[
                                                            `strMeasure${key.slice(
                                                                13
                                                            )}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                    </div>
                    {strYoutube ? (
                        <div className='card-content'>
                            <h5>Video Recipe</h5>
                            <iframe
                                width='560'
                                height='315'
                                src={`https://www.youtube.com/embed/${strYoutube.slice(
                                    -11
                                )}`}
                                title={idMeal}
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            ></iframe>
                        </div>
                    ) : null}
                </div>

                <div className='card-action'>
                    <Link to={`/`} className='btn'>
                        Go to home page
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MealRecipe;
