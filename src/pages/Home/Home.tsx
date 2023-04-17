import React from 'react';
import './Home.scss';
import { useSelector } from 'react-redux';

export const Home: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: State) => state.user.currentUser);

    return (
      <div className="home">
        <div className="home__wrapper">
          <h2>Welcome, Principal {user?.fullName.split(" ")[1]}</h2>

          <div>
            <p>School: Northwood</p>
          </div>
        </div>
      </div>
    )
  }
)