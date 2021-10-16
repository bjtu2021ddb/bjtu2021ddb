import { Loading } from '@/components';
import { getOne } from '@/db';
import { Dialog, Form, ImageUploader, Input, NavBar, TextArea } from 'antd-mobile';
import React from 'react';
import { withRouter } from 'react-router-dom';

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileList: [],
      loading: false,
    };

    this.formRef = React.createRef();

    this.back = this.back.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.changeFileList = this.changeFileList.bind(this);
  }

  componentDidMount() {
    const { _id } = this.props.match.params;
    this.refresh(_id);
  }

  back() {
    this.props.history.go(-1);
  }

  /**
   * 刷新数据
   */
  refresh(_id) {
    getOne(_id, (doc) => {
      this.formRef.current?.setFieldsValue(doc);
    });
  }

  changeFileList(fileList) {
    this.setState({ fileList });
  }

  uploadFile(file) {
    console.log('uplaod file', file);
    // lastModified: 1632085881000
    // lastModifiedDate: Mon Sep 20 2021 05:11:21 GMT+0800 (中国标准时间) {}
    // name: "1.png"
    // size: 91861
    // type: "image/png"
    // webkitRelativePath: ""

    return { url: URL.createObjectURL(file) };
  }

  render() {
    const { loading, fileList } = this.state;

    return (
      <>
        <NavBar className="nav-bar" onBack={this.back}>
          修改关键点
        </NavBar>

        <Form ref={this.formRef} layout="horizontal" style={{ marginTop: '45px' }}>
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
            <TextArea autoSize={{ minRows: 3, maxRows: 5 }} placeholder="请输入备注" />
          </Form.Item>

          <Form.Item name="images" label="图片">
            <ImageUploader
              multiple
              value={fileList}
              onChange={this.changeFileList}
              upload={this.uploadFile}
              onDelete={(file) => {
                return Dialog.confirm({
                  content: '是否确认删除',
                  onConfirm: () => {},
                });
              }}
            />
          </Form.Item>
        </Form>

        <Loading visible={loading} />
      </>
    );
  }
}

export default withRouter(TaskEdit);
