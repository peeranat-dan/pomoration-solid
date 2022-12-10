import { Routes, Route } from '@solidjs/router';

import Landing from '@/pages/landing';
import Layout from './components/base/Layout';

const PATHS = {
  HOME: '/',
};

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout withHeader />}>
          <Route path={PATHS.HOME} element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesApp;
