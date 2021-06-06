import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.scss';
import ListSpaces from './ListSpaces';
import GettingStartedSpace from './GettingStartedSpace';

interface Props {
  history: any;
}

const Landing = (props: Props) => {
  return <div className="landing">Landing page</div>;
};

export default Landing;
