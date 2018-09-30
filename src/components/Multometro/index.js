import React from 'react';
import { Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MultometroActions } from 'store/ducks/multometro';

import styles from './styles';

class Multometro extends React.Component {
  componentDidMount(){
    this.props.getRequest();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Multometro</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Valor:</Text>
          <Text style={styles.price}>R$ {this.props.multometro.data}</Text>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  multometro: state.multometro,
});

const mapDispatchToProps = dispatch => bindActionCreators(MultometroActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Multometro);
