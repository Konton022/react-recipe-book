import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import Preloader from '../components/Preloader';

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        getAllCategories().then((resp) => setCatalog(resp.categories));
    }, []);

    return (
        <div>
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={catalog} />
            )}
        </div>
    );
};

export default Home;
