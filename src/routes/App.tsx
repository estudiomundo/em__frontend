import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../containers/Home';
import ReactGA from 'react-ga4';
import Navbar from '../components/Navbar';

const App = () => {
  let location = useLocation();

  useEffect(
    () =>
      ReactGA.send({
        hitType: 'pageView',
        page: window.location.pathname + window.location.search,
      }),
    [location],
  );

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
