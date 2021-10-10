import { TabBar } from 'antd-mobile';
import React from 'react';
import TaskList from '../TaskList';
import { tabs } from './consts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 'todo',
    };

    this.tabChange = this.tabChange.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  tabChange(key) {
    this.setState({ activeKey: key });
  }

  renderContent() {
    const { activeKey } = this.state;
    const title = tabs.find((t) => t.key === activeKey).title;
    return activeKey === 'todo' ? <TaskList title={title} /> : null;
  }

  render() {
    const { activeKey } = this.state;

    return (
      <>
        <div className="tab-content">{this.renderContent()}</div>

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
