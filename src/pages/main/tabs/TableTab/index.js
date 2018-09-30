import React, { Component, Fragment } from 'react';
import { Text, ScrollView, View, StatusBar, RefreshControl, FlatList } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as EmployeeActions } from 'store/ducks/employee';


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
    this.props.getRequest();
  }


  componentDidMount() {
    this.props.getRequest();
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
        <View style={styles.filters}>
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
        <View style={styles.date}>
          <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
        </View>
        <View style={styles.list}>
        <Text style={styles.listTitle}>Indice de Incidências</Text>

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

const mapDispatchToProps = dispatch => bindActionCreators(EmployeeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TableTab);

