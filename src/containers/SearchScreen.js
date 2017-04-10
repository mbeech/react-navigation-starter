import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import Search from 'react-native-search-box';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SearchScreen extends Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      items: [],
      results: [],
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

  search(query) {
    const items = this.state.items;
    this.setState({
      // shuffle the items up to make it look like something is happening
      results: items.sort(() => {return 0.5 - Math.random()}),
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    if (this.state.isLoading) {
      return <Loading />;
    }

    const items = this.state.results.map((item, index) => (
        <Card
          key={item.sha}
          item={item}
          navigate={navigate}
        />
    ));

    return (
      <View>
        <Search
          backgroundColor="#bbb"
          onChangeText={this.search}
        />
        <ScrollView style={{ padding: 10 }}>
          { items }
        </ScrollView>
      </View>
    );
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
  tabBar: {
    icon: ({ tintColor }) => (
      <Icon
        name="search"
        size={32}
        color={tintColor}
      />
    ),
  },
  header: {
    backTitle: 'Back',
  },
};

export default SearchScreen;
