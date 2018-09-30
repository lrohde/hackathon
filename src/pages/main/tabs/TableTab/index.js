import React, { Component, Fragment } from 'react';
import { Text, ScrollView, View, StatusBar, RefreshControl, FlatList } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as EmployeeActions } from 'store/ducks/employee';
import { Creators as MultometroActions } from 'store/ducks/multometro';


import styles from './styles';
import Table from 'components/Table';
import ListItem from 'components/ListItem';
import Multometro from 'components/Multometro';

class TableTab extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:"2016-05-15",
      refreshing: false,
    }

  }

  _onRefresh = () => {
    this.props.employeeAction.getRequest();
    this.props.multometroAction.getRequest();
  }


  componentDidMount() {
    this.props.employeeAction.getRequest();
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

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" style={{ color: tintColor, fontSize: 20 } } />
    ),
    title: 'Header',
    headerTitleStyle: {
      color: '#000',
    }
  }


  render() {
    return (
      <Fragment>
        <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.list}>
        <Text style={styles.listTitle}>Últimos Registros</Text>

        <FlatList
          data={this.props.employee.data}
          refreshControl={
            <RefreshControl
              refreshing={this.props.employee.loading}
              onRefresh={this._onRefresh}
            />
          }
          renderItem={({item}) =>  <ListItem
              key={item.id}
              name={item.employee.name}
              epi={item.epi.name}
              status={item.status}
            />}
        />
          {/* {
            this.props.employee
            ? this.props.employee.data.map(employ => {
              return (
                <ListItem
                  key={employ.id}
                  name={employ.employee.name}
                  epi={employ.epi.name}
                  status={employ.status}
                />
              );
            })
            :null
          } */}
        </View>

        {/* <Table data={}/> */}

      </View>
      <Multometro />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee,
});

const mapDispatchToProps = dispatch => ({
  employeeAction: bindActionCreators(EmployeeActions, dispatch),
  multometroAction: bindActionCreators(MultometroActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TableTab);

