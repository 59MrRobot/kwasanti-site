import React from 'react';
import './Topbar.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';

export const Topbar: React.FC = React.memo(
  () => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(logout());
    }

    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <h1 className="topbar__title">KwaSanti District</h1>

          <button
            className="topbar__button"
            onClick={handleClick}
          >
            LOGOUT
          </button>
        </div>
      </div>
    )
  }
)