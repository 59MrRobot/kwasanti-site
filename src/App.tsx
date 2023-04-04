import React, { useEffect } from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [navigate, user])

  return (
    <div className="app">
      <div className="app__wrapper">
        <Topbar />

        <div className="app__container">
          <Sidebar />

          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
