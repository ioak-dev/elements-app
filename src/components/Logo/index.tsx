import React, { useEffect, useState } from 'react';
import { useSelector, connect, useDispatch } from 'react-redux';
import './style.scss';
import elementsWhite from '../../images/elements_white.svg';
import elementsBlack from '../../images/elements_black.svg';

const Logo = () => {
  const authorization = useSelector((state: any) => state.authorization);

  const profile = useSelector((state: any) => state.profile);

  const dispatch = useDispatch();

  return (
    <div className="logo">
      {profile.theme === 'theme_light' && (
        <img className="logo--image" src={elementsBlack} alt="Elements logo" />
      )}
      {profile.theme !== 'theme_light' && (
        <img className="logo--image" src={elementsWhite} alt="Elements logo" />
      )}
    </div>
  );
};

export default Logo;
