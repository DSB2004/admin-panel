import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LOADING_ROUTE from './routes/loading.routes';

const AUTH_ROUTES = lazy(() => import('./routes/auth.routes'));
const DASHBOARD_ROUTES = lazy(() => import('./routes/dashboard.routes'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <LOADING_ROUTE />
      }
      >
        <AUTH_ROUTES />
        <DASHBOARD_ROUTES />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;