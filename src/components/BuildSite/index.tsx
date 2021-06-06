import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SiteBuilder } from 'elements';
import { newId } from '../../events/MessageService';

import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import { saveSite } from '../../actions/SiteActions';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  match: any;
}

const BuildSite = (props: Props) => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: any) => state.authorization);
  const [site, setSite] = useState<any>(null);
  const sites = useSelector((state: any) => state.site.sites);
  const handleChange = (value: any) => {
    setSite({ ...site, data: value });
  };

  const handleSave = () => {
    console.log('**handle save');
    dispatch(saveSite(site, authorization));
  };

  const switchToPreview = () => {
    console.log('**switch to preview');
  };

  const goBack = () => {
    console.log('**go back');
  };

  useEffect(() => {
    if (props.match.params?.sitename) {
      setSite(
        sites?.find((item: any) => item.name === props.match.params.sitename)
      );
    }
  }, [props.match, sites]);

  return (
    <>
      {site && (
        <div className="build-site">
          <SiteBuilder value={site.data} handleChange={handleChange} />
        </div>
      )}
      <div className="build-site__footer">
        <OakButton
          theme="default"
          shape="sharp"
          variant="outline"
          handleClick={switchToPreview}
        >
          Preview
        </OakButton>
        <OakButton
          theme="default"
          shape="sharp"
          variant="outline"
          handleClick={goBack}
        >
          Cancel
        </OakButton>
        <OakButton
          theme="default"
          shape="sharp"
          variant="regular"
          handleClick={handleSave}
        >
          Save
        </OakButton>
      </div>
    </>
  );
};

export default BuildSite;
