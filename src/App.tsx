import React, { useEffect } from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [navigate, user])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
