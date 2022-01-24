import React, {useState, useEffect} from 'react';
import {getAllCategories} from '../api'
const Home = () => {
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {   
        getAllCategories().then(resp => setCatalog(resp.categories))
        
    })

    return <div>Home page</div>
};

export default Home;
