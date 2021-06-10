import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newId } from '../../events/MessageService';
import OakButton from '../../oakui/wc/OakButton';
import OakForm from '../../oakui/wc/OakForm';
import OakInput from '../../oakui/wc/OakInput';
import DocumentListing from './DocumentListing';

import './CreateSection.scss';
import { httpPut } from '../Lib/RestTemplate';
import { saveDocument } from '../../actions/DocumentActions';

const queryString = require('query-string');

interface Props {
  history?: any;
}

const CreateSection = (props: Props) => {
  const authorization = useSelector((state: any) => state.authorization);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ name: '' });

  const formGroupName = `form-${newId()}`;

  const handleSubmit = () => {
    dispatch(
      saveDocument({ name: state.name, data: [], status: 'NEW' }, authorization)
    );
    setIsOpen(false);
  };

  const handleChange = (detail: any) => {
    setState({ ...state, [detail.name]: detail.value });
  };

  return (
    <div className="document-create-section">
      {!isOpen && (
        <div className="document-create-section__action">
          <OakButton handleClick={() => setIsOpen(true)}>
            New document
          </OakButton>
        </div>
      )}
      {isOpen && (
        <OakForm formGroupName={formGroupName} handleSubmit={handleSubmit}>
          <div className="document-create-section__form">
            <OakInput
              name="name"
              value={state.name}
              handleInput={handleChange}
              label="Document name"
              formGroupName={formGroupName}
            />
            <OakButton type="submit" formGroupName={formGroupName}>
              Create
            </OakButton>
          </div>
        </OakForm>
      )}
    </div>
  );
};

export default CreateSection;
