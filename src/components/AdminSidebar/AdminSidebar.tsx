import React from 'react';
import './AdminSidebar.scss';
import SchoolIcon from '@mui/icons-material/School';

interface Props {
  schools: string[];
}

const AdminSidebar: React.FC<Props> = ({ schools }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <p className="sidebar__heading">Schools</p>

        <ul className='sidebar__list'>
          {schools.map((school, index) => (
            <li key={index}>
              <div className='sidebar__item'>
                <SchoolIcon fontSize="small" />

                <p>{school}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar