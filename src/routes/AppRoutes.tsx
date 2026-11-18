/**
 * This file contains the routes of the entire page.
 */
import { Route, Routes } from 'react-router-dom';

import Layout from '@/layouts/Layout';
import Cart from '@/pages/Cart.page';
import Discover from '@/pages/Discover.page';
import Login from '@/pages/Login.page';
import NotFound from '@/pages/NotFound.page';
import Orders from '@/pages/Orders.page';
import Register from '@/pages/Register/Register.page';

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
