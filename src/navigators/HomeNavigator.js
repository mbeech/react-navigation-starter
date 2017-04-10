import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from '../containers/HomeScreen';
import ItemScreen from '../containers/ItemScreen';
import SearchScreen from '../containers/SearchScreen';

const HomeNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
  },
  Item: {
    screen: ItemScreen,
    path: '/item',
  },
  Search: {
    screen: SearchScreen,
    path: '/search',
  },
});

export default HomeNavigator;
