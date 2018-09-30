import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Multometro = () => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>Multometro</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.priceText}>Valor:</Text>
      <Text style={styles.price}>R$ 5000, 00</Text>
    </View>
  </View>
);

export default Multometro;
