import React from 'react';
import './School.scss';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const School = () => {
  const user: User = useSelector((state: State) => state.user.currentUser);
  const principal: User = user.isAdmin ? (user) : user;
  const date = new Date();
  const today = String(date).split(" ").slice(0, 4).join(" ");

  return (
    <div className="school">
      <div className={cn(
        'school__wrapper',
        {'school__wrapper--admin': user.isAdmin},
        {'school__wrapper--user': !user.isAdmin},
      )}>
        <div className="school__principal">
          <div className="school__principal-detail school__principal-detail--image">
            <img
              src={principal.image}
              alt="profile icon"
              className="school__principal-image"
            />
          </div>

          <div className="school__principal-detail">
            <PersonIcon style={{ color: "grey" }} />

            <p>{principal.fullName}</p>
          </div>

          <div className="school__principal-detail">
            <EmailIcon style={{ color: "grey" }} />

            <p>{principal.email}</p>
          </div>

          <div className="school__principal-detail">
            <PhoneIcon style={{ color: "grey" }} />

            <p>{principal.number}</p>
          </div>
        </div>

        <div className={cn(
        'school__info',
        {'school__info--admin': user.isAdmin},
        {'school__info--user': !user.isAdmin},
      )}>
          <p className="school__name">Northwood School</p>

          <p className="school__label">
            Capacity:<span className="school__value">1200</span>
          </p>

          <p className="school__label">
            Enrolment:<span className="school__value">1187</span>
          </p>
          
          <p className="school__label">
            Today's Attendance ({today}):
            <span className="school__value">639</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default School