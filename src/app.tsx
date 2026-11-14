/**
 * Root application component that sets up client-side routing.
 */
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '@/routes/AppRoutes';

const App = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default App;
