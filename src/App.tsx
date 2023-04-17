import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';
import cn from 'classnames';

const App: React.FC = () => {
  const user: User = useSelector((state: State) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [navigate, user])

  return (
    <div className={cn('app', {'app--user': !user.isAdmin})}>
      <div className="app__wrapper">
        <Topbar />

        <div className="app__container">
          {user.isAdmin && <Sidebar />}

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
