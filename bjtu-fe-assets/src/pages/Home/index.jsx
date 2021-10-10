import { NavBar, TabBar } from 'antd-mobile';
import AV from 'leancloud-storage/live-query';
import React from 'react';
import { TaskList, UploadButton } from './components';
import { tabs } from './consts';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeKey: 'todo',
    };

    this.functionBind();
  }

  componentDidMount() {
    this.refreshList();
  }

  functionBind() {
    this.refreshList = this.refreshList.bind(this);
    this.tabChange = this.tabChange.bind(this);
    this.upload = this.upload.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderRightButton = this.renderRightButton.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  tabChange(key) {
    this.setState({ activeKey: key });
  }

  renderTitle() {
    const { activeKey } = this.state;

    return tabs.find((t) => t.key === activeKey).title;
  }

  renderRightButton() {
    const { activeKey } = this.state;
    return activeKey === 'todo' ? (
      <UploadButton upload={this.upload} />
    ) : null;
  }

  renderContent() {
    const { data, activeKey } = this.state;
    return activeKey === 'todo' ? (
      <TaskList data={data} refreshList={this.refreshList} />
    ) : null;
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

  /**
   * 上传同步数据
   */
  upload() {
    this.setState({ data: [] });
  }

  render() {
    const { activeKey } = this.state;

    return (
      <>
        <NavBar
          className="nav-bar"
          backArrow={false}
          right={this.renderRightButton()}
        >
          {this.renderTitle()}
        </NavBar>

        <div className="content">{this.renderContent()}</div>

        <TabBar
          className="tab-bar"
          activeKey={activeKey}
          onChange={this.tabChange}
        >
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </TabBar>
      </>
    );
  }
}

export default Home;
