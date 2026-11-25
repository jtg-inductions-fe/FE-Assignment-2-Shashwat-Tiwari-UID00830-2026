/**
 * This file contains the routes of the entire page.
 */
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
    CART_ROUTE,
    DISCOVER_ROUTE,
    LOGIN_ROUTE,
    ORDERS_ROUTE,
    REGISTER_ROUTE,
} from '@/constant/index';
import { Layout } from '@/layouts/Layout';
import { Cart } from '@/pages/Cart.page';
import { DiscoverPage } from '@/pages/Discover/Discover.page';
import { LoginPage } from '@/pages/Login/Login.page';
import { NotFound } from '@/pages/NotFound/NotFound.page';
import { Orders } from '@/pages/Orders.page';
import { RegisterPage } from '@/pages/Register/Register.page';
import { ProtectedRoute } from '@/routes/ProtectedRoutes';
import { PublicRoute } from '@/routes/PublicRoutes';
import { RootState } from '@/state/store';

export const AppRoutes = () => {
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
                            to={isAuthenticated ? DISCOVER_ROUTE : LOGIN_ROUTE}
                            replace
                        />
                    }
                />
                <Route element={<PublicRoute />}>
                    <Route path={LOGIN_ROUTE} element={<LoginPage />} />
                    <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                    <Route path={DISCOVER_ROUTE} element={<DiscoverPage />} />
                    <Route path={ORDERS_ROUTE} element={<Orders />} />
                </Route>
                <Route element={<ProtectedRoute allowedRoles={['Customer']} />}>
                    <Route path={CART_ROUTE} element={<Cart />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
