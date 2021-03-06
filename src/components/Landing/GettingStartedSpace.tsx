import React from 'react';
import OakButton from '../../oakui/wc/OakButton';
import './style.scss';

interface Props {
  history: any;
}

const GettingStartedSpace = (props: Props) => {
  const goToCreatePage = () => {
    props.history.push('/asset/create');
  };
  return (
    <div className="getting-started">
      <div>
        Getting Started
        <div className="getting-started--steps space-top-2">
          <div className="typography-7">Create Space</div>
          <div className="typography-4">
            An asset represents an application or product being supported.
            Create an asset to get started with the process of onboarding your
            product into Elements.
          </div>
          <div className="typography-7">Set Elements URL in your product</div>
          <div className="typography-4">
            To provide seemless experience to your users, add a link from your
            product to Elements. By triggering a button for example from your
            product, your users will be securely transferred to Elements with
            their details.
          </div>
          <div className="typography-7">
            Securely transmit user information to Elements
          </div>
          <div className="typography-4">
            When you redirect from your product, transmit the user information
            like email and name securely using JWT tokens. Password for JWT is
            set by you during the asset creation process.
          </div>
        </div>
      </div>
      <div className="action-footer position-center">
        <OakButton
          theme="primary"
          variant="disappear"
          handleClick={goToCreatePage}
        >
          Create a new space
        </OakButton>
      </div>
    </div>
  );
};

export default GettingStartedSpace;
