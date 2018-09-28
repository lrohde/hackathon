import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';


class Example extends Component {
  componentDidMount() {
    this.props.getRequest('lrohde/TCC_2017');
  }

  render() {
    return (
      <View>
        <Text> Im a page </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  exmaples: state.example,
});

const mapDispatchToProps = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Example);
