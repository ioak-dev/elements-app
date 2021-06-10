import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { compose as tableCompose } from '@oakui/core-stage/style-composer/OakTableComposer';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';

import './DocumentListing.scss';
import OakButton from '../../oakui/wc/OakButton';

const queryString = require('query-string');

interface Props {
  history?: any;
}

const DocumentListing = (props: Props) => {
  const documents = useSelector((state: any) => state.document.documents);

  const goToEditDocument = (document: any) => {
    props.history.push(`/document/${document.name}/edit`);
  };

  return (
    <div>
      <table
        className={tableCompose({
          color: 'container',
          navPosition: 'none',
        })}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Created on</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents?.map((item: any) => (
            <tr key={item._id}>
              <td>
                <a
                  href={`#/document/${item.name}/preview`}
                  className={linkCompose({
                    underlineStyle: 'hover',
                    textStyle: 'always',
                  })}
                >
                  {item.name}
                </a>
              </td>
              <td>{item.status}</td>
              <td>{item.createdAt}</td>
              <td>
                <div className="document-item-actions">
                  <OakButton
                    size="xsmall"
                    theme="default"
                    variant="appear"
                    handleClick={() => goToEditDocument(item)}
                  >
                    Edit document
                  </OakButton>
                  <OakButton
                    size="xsmall"
                    theme="default"
                    variant="appear"
                    handleClick={() => {}}
                  >
                    Settings
                  </OakButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentListing;
