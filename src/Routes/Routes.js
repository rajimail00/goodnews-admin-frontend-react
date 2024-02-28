import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Category from '../categorys.js/Category';
import NewCategory from '../categorys.js/NewCategory';
import News from '../News/News';
import Ads from '../Ads/Ads';

function RoutePages() {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/new-category" element={<NewCategory />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/ads" element={<Ads />} />
                </Routes>
        </div>
    )
}

export default RoutePages;