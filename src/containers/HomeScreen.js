import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import Loading from '../components/Loading';

class HomeScreen extends Component {

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
      <Card
        key={item.sha}
        item={item}
        navigate={navigate}
      />
    ));

    return (
      <ScrollView style={{ padding: 10 }}>
        { items }
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Commits',
  tabBar: {
    icon: ({ tintColor }) => (
      <Icon
        name="restore"
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
    right: (
      <Icon
        name="search"
        size={28}
        onPress={() => navigate('Search')}
        style={{ padding: 10 }}
      />
    ),
  }),
};

export default HomeScreen;
