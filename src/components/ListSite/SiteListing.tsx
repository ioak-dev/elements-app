import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { compose as tableCompose } from '@oakui/core-stage/style-composer/OakTableComposer';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';

import './SiteListing.scss';
import OakButton from '../../oakui/wc/OakButton';

const queryString = require('query-string');

interface Props {
  history?: any;
}

const SiteListing = (props: Props) => {
  const sites = useSelector((state: any) => state.site.sites);

  const goToEditSite = (site: any) => {
    props.history.push(`/site/${site.name}/edit`);
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
          {sites?.map((item: any) => (
            <tr key={item._id}>
              <td>
                <a
                  href={`#/site/${item.name}`}
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
                <div className="site-item-actions">
                  <OakButton
                    size="xsmall"
                    theme="default"
                    variant="appear"
                    handleClick={() => goToEditSite(item)}
                  >
                    Edit site
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

export default SiteListing;
