/**
 * This file contains the routes of the entire page.
 */
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/layouts/Layout';
import Cart from '@/pages/Cart.page';
import Discover from '@/pages/Discover.page';
import Login from '@/pages/Login/Login.page';
import NotFound from '@/pages/NotFound/NotFound.page';
import Orders from '@/pages/Orders.page';
import Register from '@/pages/Register/Register.page';
import ProtectedRoute from '@/routes/protectedRoutes';
import PublicRoute from '@/routes/publicRoutes';
import { RootState } from '@/state/store';

const AppRoutes = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Navigate
                            to={isAuthenticated ? '/discover' : '/login'}
                            replace
                        />
                    }
                />
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/orders" element={<Orders />} />
                </Route>
                <Route element={<ProtectedRoute allowedRoles={['Customer']} />}>
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
