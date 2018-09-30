import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Welcome = ({ navigation }) => (
  <View style={styles.container} >
  <View style={styles.titleContainer}>
    <Image source={require('img/title.png')} />
  </View>
  <View style={styles.logoContainer}>
    <Image source={require('img/logo.png')} />
  </View>
  <TouchableOpacity style={styles.arrowContainer} onPress={() => navigation.navigate('Main')}>
    <Icon style={styles.arrow} name="ios-arrow-forward" />
  </TouchableOpacity>

  </View>
);

export default Welcome;
