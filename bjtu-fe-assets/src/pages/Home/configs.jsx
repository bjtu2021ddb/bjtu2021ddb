import { AppOutline, MessageFill, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

export const tabs = [
  {
    key: 'home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: 'todo',
    title: '我的待办',
    icon: <UnorderedListOutline />,
  },
  {
    key: 'message',
    title: '我的消息',
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
  },
  {
    key: 'personalCenter',
    title: '个人中心',
    icon: <UserOutline />,
  },
];
