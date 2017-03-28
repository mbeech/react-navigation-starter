import React, { Component } from 'react';
import {
  TabNavigator,
} from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import AnotherNavigator from './AnotherNavigator';

const Tabs = TabNavigator({
  Home: {
    screen: HomeNavigator,
    path: '/',
  },
  Another: {
    screen: AnotherNavigator,
    path: '/another',
  },
  Something: {
    screen: AnotherNavigator,
    path: '/something',
  },
  Last: {
    screen: AnotherNavigator,
    path: '/last',
  },
}, {
  tabBarOptions: {
    showIcon: true
  },
});

export default Tabs;