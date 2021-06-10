import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockService } from 'elements';
import { newId } from '../../events/MessageService';

import './style.scss';
import OakButton from '../../oakui/wc/OakButton';
import { saveDocument } from '../../actions/DocumentActions';
import OakViewer from '../../oakui/OakViewer';

const queryString = require('query-string');

interface Props {
  space: string;
  history: any;
  match: any;
}

const PreviewDocument = (props: Props) => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: any) => state.authorization);
  const [document, setDocument] = useState<any>(null);
  const documents = useSelector((state: any) => state.document.documents);
  const handleChange = (value: any) => {
    setDocument({ ...document, data: value });
  };

  const handleSave = () => {
    console.log('**handle save');
    dispatch(saveDocument(document, authorization));
  };

  const switchToPreview = () => {
    console.log('**switch to preview');
  };

  const goBack = () => {
    console.log('**go back');
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
        <div className="preview-document">
          <div
            dangerouslySetInnerHTML={{
              __html: BlockService.toHtml(document.data) || '',
            }}
          />
          {/* <OakViewer>{BlockService.toHtml(document.data)}</OakViewer> */}
        </div>
      )}
    </>
  );
};

export default PreviewDocument;
