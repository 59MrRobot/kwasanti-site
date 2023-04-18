import React from 'react';
import './Update.scss';
import '../../styles/button.scss';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateShowUpdate } from '../../redux/settingRedux';

export const Update: React.FC = React.memo(
  () => {
    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(updateShowUpdate(false));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    }

    return (
      <div className="update">
        <div className="update__wrapper">
          <div className="update__controls">
            <h1 className="update__title">Update School Information</h1>

            <button className="update__close" onClick={() => handleClick()}>
              <Tooltip title="Close">
                <CloseIcon />
              </Tooltip>
            </button>
          </div>

          <form className="form">
            <div className="form__field">
              <label htmlFor="attendance">Attendance</label>

              <input
                type="number"
                name="attendance"
                placeholder="Attendance..."
                className="form__input"
              />

              <input type="submit" value="SUBMIT" className="button" />
            </div>
          </form>
        </div>
      </div>
    )
  }
);