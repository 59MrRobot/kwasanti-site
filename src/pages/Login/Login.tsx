import React, { useState } from 'react';
import './Login.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Login: React.FC = React.memo(
  () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className='login'>
        <div className="login__wrapper">
          <h1 className="login__title">KwaSanti District</h1>

          <form className="login__form">
            <div className="login__field">
              <input
                type="text"
                name="email"
                placeholder='Email...'
                className="login__input"
              />
            </div>

            <div className="login__field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder='Password...'
                className="login__input"
              />

              <div
                className="login__icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword
                  ? (<VisibilityOffIcon />)
                  : (<VisibilityIcon />)
                }
              </div>
            </div>


            <button className="login__button">LOGIN</button>
          </form>
        </div>
      </div>
    )
  }
)