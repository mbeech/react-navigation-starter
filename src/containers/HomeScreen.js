import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.setState({
      items: require('../items.json')
    });
  }

  render() {

    const { navigate } = this.props.navigation;

    let items = this.state.items.map((item, index) => (
        <Card
          key={index}
          item={item}
          navigate={navigate}
        />
    ));

    return (
      <ScrollView style={{padding: 10}}>
        { items }
      </ScrollView>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
  header: ({ navigate }) => ({
    left: (
      <Icon
        name="menu"
        size={28}
        onPress={() => navigate('DrawerOpen')}
        style={{padding: 10}}
      />
    ),
    right: (
      <Icon
        name="search"
        size={28}
        onPress={() => navigate('Search')}
        style={{padding: 10}}
      />
    ),
  }),
};

export default HomeScreen
