import { Empty, List, NavBar, PullToRefresh } from 'antd-mobile';
import AV from 'leancloud-storage/live-query';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { UploadButton, Loading } from '../../components';
import { showText } from '../utils';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };

    this.uploadData = this.uploadData.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.itemClick = this.itemClick.bind(this);
  }

  componentDidMount() {
    this.refreshList();
  }

  /**
   * 上传同步数据
   */
  uploadData() {
    this.setState({ loading: true });
  }

  itemClick(item) {
    this.props.history.push(`/task/${item.objectId}`);
  }

  /**
   * 刷新数据
   */
  refreshList() {
    const query = new AV.Query('KeyPoint');
    query.find().then((result) => {
      const data = result.map((value) => value.toFullJSON());
      this.setState({ data });
    });
  }

  render() {
    const { title } = this.props;
    const { data, loading } = this.state;

    return (
      <>
        <NavBar
          className="nav-bar"
          backArrow={false}
          right={<UploadButton upload={this.uploadData} />}
        >
          {title}
        </NavBar>

        <PullToRefresh onRefresh={this.refreshList}>
          {data.length > 0 ? (
            <List>
              {data.map((item) => (
                <List.Item
                  onClick={(e) => this.itemClick(item)}
                  key={item.objectId}
                  prefix={item.key_index}
                  title={`名称: ${showText(item.name)} (${showText(
                    item.remark,
                  )})`}
                  extra={`${showText(item.key_point_type)}`}
                  description={`车站: ${showText(
                    item.station_name,
                  )} 位置: ${showText(item.position)}CM`}
                  clickable
                >
                  {`里程: ${item.mile}`}
                </List.Item>
              ))}
            </List>
          ) : (
            <Empty
              style={{ padding: '128px 0' }}
              imageStyle={{ width: 128 }}
              description="暂无数据"
            />
          )}
        </PullToRefresh>

        <Loading visible={loading} />
      </>
    );
  }
}

export default withRouter(TaskList);
