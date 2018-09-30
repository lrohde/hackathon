import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import TableTab from 'pages/main/tabs/TableTab';
import GraphTab from 'pages/main/tabs/GraphTab';

const Routes = ( ) => (
  <Navigation />
);

const Navigation = StackNavigator({
  WelcomeScreen: { screen: Welcome },
  Main: { screen: StackNavigator({
    Tab: { screen: TabNavigator({
      TableTab: { screen: TableTab },
      GraphTab: { screen: GraphTab,
      },
    }, {
      tabBarPosition: 'top',
      tabBarOptions: {
        tintColor: '#fff',
        activeTintColor: '#fff',
        inactiveTintColor: '#f5f5f5',
        showLabel : false,
        showIcon: true,
        style: {
          backgroundColor: '#C23334',
          color: '#fff',
        },
        indicatorStyle: {
          backgroundColor: '#fff',
      },
      lazy: true,
    },
    })},
  })},
  navigationOptions: () => ({
    title: 'HEader',
    headerTitleStyle: {
      color: '#000',
    }
  }),
}, {
  headerMode: 'none',
});

export default Routes;
