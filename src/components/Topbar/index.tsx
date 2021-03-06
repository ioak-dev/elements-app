import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';

import { getProfile, setProfile } from '../../actions/ProfileActions';

import './style.scss';

import RightNav from './RightNav';
import ExpandIcon from './ExpandIcon';
import Logo from '../Logo';
import ChangeAsset from './ChangeAsset';
import Menu from './Menu';

interface Props {
  space: string;
  cookies: any;
  //   location: any;
  //   match: any;
  hideSidebarOnDesktop?: boolean;
}

const Topbar = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(setProfile({ ...profile, sidebar: !profile.sidebar }));
  };

  return (
    <div className="topbar">
      <div className="topbar--left">
        <Logo />
        <Menu />
      </div>
      <div className="topbar--right">
        <RightNav cookies={props.cookies} />
      </div>
    </div>
  );
};

export default Topbar;
