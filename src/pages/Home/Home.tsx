import React from 'react';
import './Home.scss';
import '../../styles/button.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const Home: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: State) => state.user.currentUser);

    return (
      <div className="home">
        <div className={cn(
            'home__wrapper',
            {'home__wrapper--admin': user && user.isAdmin},
            {'home__wrapper--user': user && !user.isAdmin},
          )}>
          <h2 className={cn(
            'home__title',
            {'home__title--admin': user && user.isAdmin},
            {'home__title--user': user && !user.isAdmin},
          )}>
            Welcome, Principal {user?.fullName.split(" ")[1] || "User"}
          </h2>

          <div className={cn(
            'home__container',
            {'home__container--admin': user && user.isAdmin},
            {'home__container--user': user && !user.isAdmin},
          )}>
            <p className="home__school">Northwood School</p>

            <Link to="/school/id" style={{ textDecoration: "none" }}>
              <button className="button">View School Information</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
)