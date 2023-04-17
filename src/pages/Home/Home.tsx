import React from 'react';
import './Home.scss';
import '../../styles/button.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Home: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: State) => state.user.currentUser);

    return (
      <div className="home">
        <div className="home__wrapper">
          <h2 className="home__title">
            Welcome, Principal {user?.fullName.split(" ")[1]}
          </h2>

          <div className="home__container">
            <p className="home__school">Northwood School</p>

            <Link to="/school/:id" style={{ textDecoration: "none" }}>
              <button className="button">View School Information</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)