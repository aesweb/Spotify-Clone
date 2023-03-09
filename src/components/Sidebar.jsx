import React from 'react';
import logo from '../img/logo.svg';

const Sidebar = () => {
  return (
    <aside className="w-60 py-6">
      <img src={logo} alt="" className="h-10" />
    </aside>
  );
};

export default Sidebar;
