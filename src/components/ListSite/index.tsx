import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SiteListing from './SiteListing';
import CreateSection from './CreateSection';

import './style.scss';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  projectId: string;
}

const ListSite = (props: Props) => {
  const sites = useSelector((state: any) => state.site.sites);

  return (
    <div className="list-site">
      <CreateSection />
      <SiteListing history={props.history} />
    </div>
  );
};

export default ListSite;
