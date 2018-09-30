import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import SelectInput from 'react-native-select-input-ios';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import Multometro from 'components/Multometro';


const data = [
  {
    month: new Date(2015, 0, 1),
    apples: 3840,
    bananas: 1920,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2015, 1, 1),
    apples: 1600,
    bananas: 1440,
    cherries: 960,
    dates: 400,
  },
  {
    month: new Date(2015, 2, 1),
    apples: 640,
    bananas: 960,
    cherries: 3640,
    dates: 400,
  },
  {
    month: new Date(2015, 3, 1),
    apples: 3320,
    bananas: 480,
    cherries: 640,
    dates: 400,
  },
];



const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
const keys = ['apples', 'bananas', 'cherries', 'dates'];
const svgs = [
  { onPress: () => Alert.alert('apples') },
  { onPress: () => Alert.alert('bananas') },
  { onPress: () => Alert.alert('cherries') },
  { onPress: () => Alert.alert('dates') },
];



class GraphTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-stats" style={{ color: tintColor, fontSize: 20 } } />
    )
  }

  getPickerDate = () => {
    return [
      { value: 0, label: 'Date' },
      { value: 1, label: 'Banana' },
      { value: 2, label: 'Orange' },
      { value: 3, label: 'Strawberry' },
    ];
  }

  getPickerSection = () => {
    return [
      { value: 0, label: 'Setor' },
      { value: 1, label: 'Banana' },
      { value: 2, label: 'Orange' },
      { value: 3, label: 'Strawberry' },
    ];
  }

  getPickerEmployeer = () => {
    return [
      { value: 0, label: 'Funcionário' },
      { value: 1, label: 'Banana' },
      { value: 2, label: 'Orange' },
      { value: 3, label: 'Strawberry' },
    ];
  }

  render(){
    return(
      <Fragment>
        <View style={styles.container}>
          <View style={styles.filters}>
            <SelectInput
              options={this.getPickerDate()}
              onSubmitEditing={(value) => console.tron.log(value)}
              style={{ padding: 10 }}
            />
            <SelectInput
              options={this.getPickerSection()}
              onSubmitEditing={(value) => console.tron.log(value)}
              style={{ padding: 10 }}
            />
            <SelectInput
              options={this.getPickerEmployeer()}
              onSubmitEditing={(value) => console.tron.log(value)}
              style={{ padding: 10 }}
            />
          </View>
          <StackedAreaChart
            style={{ height: 200, paddingVertical: 16 }}
            data={data}
            keys={keys}
            colors={colors}
            curve={shape.curveNatural}
            showGrid={false}
            svgs={svgs}
          />
        </View>
        <Multometro />
      </Fragment>
    );
  }

};

export default GraphTab;
