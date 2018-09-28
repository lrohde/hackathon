

import React from 'react';
import { Text, View } from 'react-native';

import 'config/ReactotronConfig';
import { Provider } from 'react-redux';

import store from "store";

import Example from 'pages/main';

const App = () => (
  <Provider store={store}>
    <View>
      <Example />
    </View>
  </Provider>
);

export default App;
