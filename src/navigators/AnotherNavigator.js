import {
  StackNavigator,
} from 'react-navigation';

import EmptyScreen from '../containers/EmptyScreen';

const AnotherNavigator = StackNavigator({
  Empty: {
    screen: EmptyScreen,
    path: '/empty',
  },
});

export default AnotherNavigator;
