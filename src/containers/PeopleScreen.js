import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';

class PeopleScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/react-community/react-navigation/commits')
      .then(response => response.json())
      .then(response => {
        this.setState({
          items: response,
          isLoading: false,
        });
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    if (this.state.isLoading) {
      return <Loading />;
    }

    const items = this.state.items.map(item => (
      <ListItem
        key={item.sha}
        item={item}
      />
    ));

    return (
      <ScrollView>
        { items }
      </ScrollView>
    );
  }
}

PeopleScreen.navigationOptions = {
  title: 'People',
  tabBar: {
    icon: ({ tintColor }) => (
      <Icon
        name="face"
        size={32}
        color={tintColor}
      />
    ),
  },
  header: ({ navigate }) => ({
    left: (
      <Icon
        name="menu"
        size={28}
        onPress={() => navigate('DrawerOpen')}
        style={{ padding: 10 }}
      />
    ),
  }),
};

export default PeopleScreen;
