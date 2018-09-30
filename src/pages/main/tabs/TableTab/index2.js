import React from 'react';
import { Text, View, Alert } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

// import Table from 'components/Table';

import styles from './styles';

class Main extends React {
  constructor(props){
    super(props);

  }
  componentDidMount() {

  }

  render() {

  return(
    <View style={styles.container}>
      <Text>Table</Text>
    </View>
    );

  }
}

const mapStateToProps = state => ({
  exmaples: state.example,
});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
