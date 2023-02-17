import React from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


function App() {

    const reactRouter = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
        </Route>
    ))

    return (
        
        <>
            <RouterProvider router={reactRouter}/>
        </>
    );
}

export default App;
