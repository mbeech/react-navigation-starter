import {
  StackNavigator,
} from 'react-navigation';

import PeopleScreen from '../containers/PeopleScreen';

const PeopleNavigator = StackNavigator({
  People: {
    screen: PeopleScreen,
    path: '/people',
  },
});

export default PeopleNavigator;
