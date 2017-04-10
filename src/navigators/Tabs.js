import { TabNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import PeopleNavigator from './PeopleNavigator';
import AnotherNavigator from './AnotherNavigator';

const Tabs = TabNavigator({
  Home: {
    screen: HomeNavigator,
    path: '/',
  },
  People: {
    screen: PeopleNavigator,
    path: '/people',
  },
  Another: {
    screen: AnotherNavigator,
    path: '/another',
  },
  Something: {
    screen: AnotherNavigator,
    path: '/something',
  },
}, {
  tabBarOptions: {
    showIcon: true,
  },
});

export default Tabs;
