import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Search from 'react-native-search-box';
import Card from '../components/Card';

class SearchScreen extends Component {

  constructor(props) {
    super(props);

    this.search = this.search.bind(this);

    this.state = {
      items: [],
      results: []
    }
  }

  componentDidMount() {
    this.setState({
      items: require('../items.json')
    });
  }

  search(query) {
    let items = this.state.items;
    this.setState({
      // shuffle the items up to make it look like something is happening
      results: items.sort(() => { return 0.5 - Math.random() })
    })
  }

  render() {

    const { navigate } = this.props.navigation;

    let items = this.state.results.map((item, index) => (
        <Card
          key={index}
          item={item}
          navigate={navigate}
        />
    ));

    return (
      <View>
        <Search
          ref="search"
          backgroundColor="#bbb"
          onChangeText={this.search}
        />
        <ScrollView style={{padding: 10}}>
          { items }
        </ScrollView>
      </View>
    )
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
  header: {
    backTitle: 'Back',
  },
};

export default SearchScreen
