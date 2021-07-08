import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rellax from 'rellax';
import { SitebuilderService } from 'elements';
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

const PreviewSite = (props: Props) => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: any) => state.authorization);
  const [site, setSite] = useState<any>(null);
  const [siteHtml, setSiteHtml] = useState<any>(null);
  const sites = useSelector((state: any) => state.site.sites);

  useEffect(() => {
    if (site?.data) {
      setSiteHtml(SitebuilderService.toHtml(site.data));
    }
  }, [site]);

  useEffect(() => {
    new Rellax('.elements-site-parallax', {
      speed: 2,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, [siteHtml]);

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
      {siteHtml && (
        <div className="preview-site">
          <div
            dangerouslySetInnerHTML={{
              __html: siteHtml,
            }}
          />
        </div>
      )}
    </>
  );
};

export default PreviewSite;
