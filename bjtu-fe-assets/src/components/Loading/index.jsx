import { Mask, Loading } from 'antd-mobile';
import React from 'react';
import './index.css';

class LoadingMask extends React.Component {
  render() {
    const { visible } = this.props;
    return (
      <Mask visible={visible}>
        <div className="content">
          加载中
          <Loading />
        </div>
      </Mask>
    );
  }
}

export default LoadingMask;
