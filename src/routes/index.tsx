import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default AppRoutes;
