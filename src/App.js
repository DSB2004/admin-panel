import { BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const AUTH_ROUTES = lazy(() => import('./routes/auth.routes'));
const DASHBOARD_ROUTES = lazy(() => import('./routes/dashboard.routes'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>

        <AUTH_ROUTES />

        <DASHBOARD_ROUTES />

      </Suspense>
    </BrowserRouter>
  );
}

export default App;