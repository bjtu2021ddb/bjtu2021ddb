import { Loading, UploadButton } from '@/components';
import { allDocs, bulkDocs } from '@/db';
import { showText } from '@/pages/utils';
import { Empty, List, NavBar, PullToRefresh } from 'antd-mobile';
import React from 'react';
import { withRouter } from 'react-router-dom';

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
    this.props.history.push(`/task/${item._id}`);
  }

  /**
   * 刷新数据
   */
  refreshList() {
    allDocs((docs) => {
      if (docs.rows.length === 0) {
        bulkDocs((result) => {
          allDocs((results) => {
            this.setData(results);
          });
        });
      } else {
        this.setData(docs);
      }
    });
  }

  setData(docs) {
    const data = docs.rows.map((row) => row.doc).sort((a, b) => a.key_index - b.key_index);

    this.setState({ data });
  }

  render() {
    const { title } = this.props;
    const { data, loading } = this.state;

    return (
      <>
        <NavBar className="nav-bar" backArrow={false} right={<UploadButton upload={this.uploadData} />}>
          {title}
        </NavBar>

        <PullToRefresh onRefresh={this.refreshList}>
          {data.length > 0 ? (
            <List>
              {data.map((item) => (
                <List.Item
                  onClick={(e) => this.itemClick(item)}
                  key={item._id}
                  prefix={item.key_index}
                  title={`名称: ${showText(item.name)} (${showText(item.remark)})`}
                  extra={`${showText(item.key_point_type)}`}
                  description={`车站: ${showText(item.station_name)} 位置: ${showText(item.position)}CM`}
                  clickable
                >
                  {`里程: ${item.mile}`}
                </List.Item>
              ))}
            </List>
          ) : (
            <Empty style={{ padding: '128px 0' }} imageStyle={{ width: 128 }} description="暂无数据" />
          )}
        </PullToRefresh>

        <Loading visible={loading} />
      </>
    );
  }
}

export default withRouter(TaskList);
