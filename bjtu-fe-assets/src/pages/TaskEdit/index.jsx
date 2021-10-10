import {
  Form,
  ImageUploader,
  Input,
  NavBar,
  TextArea,
} from 'antd-mobile';
import AV from 'leancloud-storage/live-query';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Loading, UploadButton } from '../../components';

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };

    this.formRef = React.createRef();

    this.back = this.back.bind(this);
    this.uploadData = this.uploadData.bind(this);
  }

  componentDidMount() {
    const { objectId } = this.props.match.params;

    const query = new AV.Query('KeyPoint');
    query.equalTo('objectId', objectId);
    query.find().then((result) => {
      const data = result.map((value) => value.toFullJSON());

      console.log(data[0]);
      this.formRef.current?.setFieldsValue(data[0]);
    });
  }

  back() {
    this.props.history.go(-1);
  }

  /**
   * 上传同步数据
   */
  uploadData() {
    this.setState({ loading: true });
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        <NavBar
          className="nav-bar"
          onBack={this.back}
          right={<UploadButton upload={this.uploadData} />}
        >
          修改关键点
        </NavBar>

        <Form
          ref={this.formRef}
          layout="horizontal"
          style={{ marginTop: '45px' }}
        >
          <Form.Item name="station_name" label="车站">
            <Input placeholder="请输入车站" />
          </Form.Item>

          <Form.Item name="key_point_type" label="关键点">
            <Input placeholder="请输入关键点" />
          </Form.Item>

          <Form.Item name="name" label="名称">
            <Input placeholder="请输入名称" />
          </Form.Item>

          <Form.Item name="type" label="类型">
            <Input placeholder="请输入类型" />
          </Form.Item>

          <Form.Item name="track_index" label="轨道号">
            <Input type="number" placeholder="请输入轨道号" />
          </Form.Item>

          <Form.Item name="position" label="位置">
            <Input type="number" placeholder="请输入位置(厘米)" />
          </Form.Item>

          <Form.Item name="mile" label="里程">
            <Input placeholder="请输入里程" />
          </Form.Item>

          <Form.Item name="remark" label="备注">
            <TextArea
              autoSize={{ minRows: 3, maxRows: 5 }}
              placeholder="请输入备注"
            />
          </Form.Item>

          <Form.Item name="images" label="图片">
            <ImageUploader />
          </Form.Item>
        </Form>

        <Loading visible={loading} />
      </>
    );
  }
}

export default withRouter(TaskEdit);
