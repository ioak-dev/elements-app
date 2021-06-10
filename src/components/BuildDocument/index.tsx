import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockEditor } from 'elements';
import { newId } from '../../events/MessageService';

import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import { saveDocument } from '../../actions/DocumentActions';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  match: any;
}

const BuildDocument = (props: Props) => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: any) => state.authorization);
  const [document, setDocument] = useState<any>(null);
  const documents = useSelector((state: any) => state.document.documents);
  const handleChange = (value: any) => {
    setDocument({ ...document, data: value });
  };

  const handleSave = () => {
    dispatch(saveDocument(document, authorization));
  };

  const switchToPreview = () => {
    props.history.push(`/document/${document.name}/preview`);
  };

  const goBack = () => {
    props.history.goBack();
  };

  useEffect(() => {
    if (props.match.params?.documentname) {
      setDocument(
        documents?.find(
          (item: any) => item.name === props.match.params.documentname
        )
      );
    }
  }, [props.match, documents]);

  return (
    <>
      {document && (
        <div className="build-document">
          <BlockEditor value={document.data} handleChange={handleChange} />
        </div>
      )}
      <div className="build-document__footer">
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
          Back
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

export default BuildDocument;
