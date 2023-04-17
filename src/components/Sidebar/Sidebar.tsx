import React from 'react';
import './Sidebar.scss';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

const SCHOOLS = ['Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School', 'Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School', 'Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School'];

export const Sidebar: React.FC = React.memo(
  () => {
    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <p className="sidebar__heading">Schools</p>

          <ul className='sidebar__list'>
            {SCHOOLS.map((school, index) => (
              <Link to="/" style={{ textDecoration: "none", color: "unset"}}>
                <li key={index}>
                  <div className='sidebar__item'>
                    <SchoolIcon fontSize="small" />

                    <p>{school}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    )
  }
)