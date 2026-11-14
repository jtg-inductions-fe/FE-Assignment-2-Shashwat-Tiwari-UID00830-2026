/**
 * This file contains the routes of the entire page.
 */
import Layout from 'layouts/Layout';
import Cart from 'pages/Cart';
import Discover from 'pages/Discover';
import NotFound from 'pages/NotFound';
import Orders from 'pages/Orders';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;
