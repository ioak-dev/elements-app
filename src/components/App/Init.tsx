import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllSites } from '../../actions/SiteActions';
import { receiveMessage, sendMessage } from '../../events/MessageService';

const Init = () => {
  const authorization = useSelector((state: any) => state.authorization);
  const profile = useSelector((state: any) => state.profile);
  const [
    previousAuthorizationState,
    setPreviousAuthorizationState,
  ] = useState<any>();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      authorization?.isAuth &&
      authorization?.isAuth !== previousAuthorizationState?.isAuth
    ) {
      initialize();
      setPreviousAuthorizationState(authorization);
    }
  }, [authorization]);

  useEffect(() => {
    document.body.addEventListener('mousedown', () => {
      sendMessage('usingMouse', true);
    });

    // Re-enable focus styling when Tab is pressed
    document.body.addEventListener('keydown', (event: any) => {
      if (event.keyCode === 9) {
        sendMessage('usingMouse', false);
      }
    });
  }, [profile]);

  useEffect(() => {
    if (profile.theme === 'theme_light') {
      document.body.style.backgroundColor = 'var(--color-global-lightmode)';
    } else {
      document.body.style.backgroundColor = 'var(--color-global-darkmode)';
    }
  }, [profile.theme]);

  const initialize = () => {
    console.log('Initialization logic here');
    dispatch(fetchAllSites(authorization));
  };
  return <></>;
};

export default Init;
