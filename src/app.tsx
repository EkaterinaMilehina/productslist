import React from 'react';
import { SApp } from './assets/styles/app.styles';
import ProductListContainer from './components/product/list/product-list.container';
import { Routes, Route } from 'react-router-dom';
import ProductCardContainer from './components/product/card/product-card.container';

function App() {
    return (
        <SApp>
            <Routes>
                <Route path='/' element={<ProductListContainer />} />
                <Route path='/product/:id' element={<ProductCardContainer />} />
            </Routes>
        </SApp>
    );
}

export default App;
