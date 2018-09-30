import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
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
  constructor(props){
    super(props);

    this.state = {
      graphic: 0,
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-stats" style={{ color: tintColor, fontSize: 20 } } />
    )
  }

  getPickerDate = () => {
    return [
      { value: 0, label: 'Dia' },
      { value: 1, label: 'Mes' },
      { value: 2, label: 'Ano' },
    ];
  }

  render(){
    return(
      <Fragment>
        <View style={styles.container}>
          <View style={styles.filters}>
            <SelectInput
            value={this.state.graphic}
              options={this.getPickerDate()}
              onSubmitEditing={(value) => this.setState({ graphic: value })}
              style={{ padding: 10 }}
            />
            <View style={styles.graphic}>
            {
              this.state.graphic == 1
              ?<Image style={styles.image} resizeMode="contain"source={require('img/mes.jpeg')} />
              :this.state.graphic == 0
                ?<Image style={styles.image} resizeMode="contain" source={require('img/dia.jpeg')} />
                : this.state.graphic == 2
                  ?<Image style={styles.image} resizeMode="contain" source={require('img/ano.jpeg')} />
                  :null

            }
            </View>


          </View>
        </View>
        <Multometro />
      </Fragment>
    );
  }

};

export default GraphTab;
