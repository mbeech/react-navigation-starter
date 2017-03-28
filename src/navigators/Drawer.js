import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeNavigator from './HomeNavigator';
import AnotherNavigator from './AnotherNavigator';
import Tabs from './Tabs';
import EmptyScreen from '../containers/EmptyScreen';

const Drawer = DrawerNavigator({
  Tabs: {
    screen: Tabs,
    path: '/',
  },
  Another2: {
    screen: AnotherNavigator,
    path: '/another2',
  },
  Something2: {
    screen: AnotherNavigator,
    path: '/something2',
  },
  Last2: {
    screen: AnotherNavigator,
    path: '/last2',
  },
});

export default Drawer;