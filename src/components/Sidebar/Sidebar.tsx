import React from 'react';
import { useSelector } from 'react-redux';
import './Sidebar.scss';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const SCHOOLS = ['Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School', 'Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School', 'Northwood School', 'Danville Park Girls High School', 'Glenwood High School', 'Northlands Girls High School', 'Crawford International La Lucia', 'Clifton School']

export const Sidebar: React.FC = React.memo(
  () => {
    const user: User = useSelector((state: State) => state.user.currentUser);
    
    return (
      <AdminSidebar schools={SCHOOLS} />
    )
  }
)