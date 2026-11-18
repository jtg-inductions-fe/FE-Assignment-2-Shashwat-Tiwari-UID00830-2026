/**
 * This file contains the Layout of the entire page.
 */
import { Outlet } from 'react-router-dom';

import Header from '@/components/Header.component';

const Layout = () => (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
    </div>
);
export default Layout;
