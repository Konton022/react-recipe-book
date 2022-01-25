import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Category from './pages/Category';
import Meal from './pages/Meal';
import Notfound from './pages/NotFound';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/category/:name' element={<Category />} />
                        <Route path='/meal/:idMeal' element={<Meal />} />
                        <Route element={<Notfound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
