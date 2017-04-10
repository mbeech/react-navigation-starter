import { DrawerNavigator } from 'react-navigation';
import Tabs from './Tabs';
import AnotherNavigator from './AnotherNavigator';

const Drawer = DrawerNavigator({
  Tabs: {
    screen: Tabs,
    path: '/',
  },
  Another: {
    screen: AnotherNavigator,
    path: '/another',
  },
});

export default Drawer;
