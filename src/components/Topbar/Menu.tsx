import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(history);
    console.log(location.state);
  }, [history, location]);

  return (
    <div className="menu-bar">
      <NavLink to="/site" className="navitem" activeClassName="active">
        Site Builder
      </NavLink>
      <NavLink to="/document" className="navitem" activeClassName="active">
        Block Editor
      </NavLink>
    </div>
  );
};

export default Menu;
