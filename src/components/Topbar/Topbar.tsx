import React from 'react';
import './Topbar.scss';
import '../../styles/button.scss';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userRedux';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from '@mui/material';

export const Topbar: React.FC = React.memo(
  () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
      dispatch(logout());

      navigate("/auth/login");
    }

    return (
      <div className="topbar">
        <div className="topbar__wrapper">
          <h1 className="topbar__title">KwaSanti District</h1>

          {/* <button
            className="button topbar__button"
            onClick={handleClick}
          >
            LOGOUT
          </button> */}
          <button className="topbar__button" onClick={handleClick}>
            <Tooltip title="Logout">
              <LogoutIcon />
            </Tooltip>
          </button>
        </div>
      </div>
    )
  }
)