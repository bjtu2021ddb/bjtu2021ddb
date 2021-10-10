import { RedoOutline } from 'antd-mobile-icons';
import React from 'react';

class UploadButton extends React.Component {
  render() {
    const { upload } = this.props;
    return (
      <div style={{ fontSize: 18 }}>
        <RedoOutline onClick={upload} />
      </div>
    );
  }
}

export default UploadButton;
