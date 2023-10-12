import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Tweets = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </>
  );
}
export default App;
