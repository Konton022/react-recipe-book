import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        console.log('str', str);
        catalog.filter((item) => {
            return item.strCategory.toLowerCase().includes(str.toLowerCase());
        });
    };
    useEffect(() => {
        getAllCategories().then((resp) => {
            setCatalog(resp.categories);
            setFilteredCatalog(resp.categories);
        });
    }, []);

    return (
        <div>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </div>
    );
};

export default Home;
