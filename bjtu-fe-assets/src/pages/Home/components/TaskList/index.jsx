import { Empty, List, PullToRefresh } from 'antd-mobile';
import { showText } from '../../utils';
import React from 'react';
import './index.css';

class TaskList extends React.Component {
  render() {
    const { data, refreshList } = this.props;

    return (
      <>
        <PullToRefresh onRefresh={refreshList}>
          {data.length > 0 ? (
            <List>
              {data.map((item) => (
                <List.Item
                  key={item.objectId}
                  prefix={item.key_index}
                  title={`名称: ${showText(item.name)} (${showText(
                    item.remark,
                  )})`}
                  extra={`关键点类型: ${showText(
                    item.key_point_type,
                  )}`}
                  description={`车站名称: ${showText(
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
      </>
    );
  }
}

export default TaskList;
