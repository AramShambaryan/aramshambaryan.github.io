import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';




function App() {  
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                
                
                
            </BrowserRouter>
            
        </div>
    )
}

export default App;