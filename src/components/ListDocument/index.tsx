import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DocumentListing from './DocumentListing';
import CreateSection from './CreateSection';

import './style.scss';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  projectId: string;
}

const ListDocument = (props: Props) => {
  const documents = useSelector((state: any) => state.document.documents);

  return (
    <div className="list-document">
      <CreateSection />
      <DocumentListing history={props.history} />
    </div>
  );
};

export default ListDocument;
