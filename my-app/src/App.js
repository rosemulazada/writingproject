import logo from './logo.svg';
import './App.css';

import {  Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const location = useLocation();

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path={routes.homePage} element={<HomePage />} />
        <Route
          path={routes.loginRegisterPage} element={<LoginRegisterPage />}/>
        <Route path={routes.projectPage(':projectId')} element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
