import React, { useEffect, useState } from 'react';
import './Login.scss';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/apiCalls';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = React.memo(
  () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.currentUser);
    const navigate = useNavigate();

    const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      login(dispatch, { email, password });
    }

    useEffect(() => {
      if (user && !user.error) {
        navigate('/');
      }
    }, [navigate, user]);

    return (
      <div className='login'>
        <div className="login__wrapper">
          <h1 className="login__title">KwaSanti District</h1>

          <form className="login__form" onSubmit={handleClick}>
            <div className="login__field">
              <input
                type="text"
                name="email"
                placeholder='Email...'
                className="login__input"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="login__field">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder='Password...'
                className="login__input"
                onChange={(event) => setPassword(event.target.value)}
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