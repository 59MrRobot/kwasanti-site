import React from 'react';
import './Sidebar.scss';

export const Sidebar: React.FC = React.memo(
  () => {
    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          Sidebar
        </div>
      </div>
    )
  }
)