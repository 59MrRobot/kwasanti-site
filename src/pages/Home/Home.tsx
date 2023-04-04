import React from 'react';
import './Home.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';

export const Home: React.FC = React.memo(
  () => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(logout());
    }

    return (
      <div className="home">
        <div className="home__wrapper">
          HOME
        </div>
      </div>
    )
  }
)