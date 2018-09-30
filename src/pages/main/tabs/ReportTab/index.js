import React, { Component, Fragment } from 'react';
import { Text, ScrollView, View, StatusBar, RefreshControl, FlatList, TouchableOpacity } from 'react-native';
import SelectInput from 'react-native-select-input-ios';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ReportActions } from 'store/ducks/report';


import styles from './styles';
import Table from 'components/Table';
import ListItem from 'components/ListItem';
import Multometro from 'components/Multometro';

class ReportTab extends Component {
  constructor(props){
    super(props)
    this.state = {
      date:"2016-05-15",
      refreshing: false,
      employee_id: 1,
      section_id: 1,
      start_date: null,
      end_date: null,
    }

  }

  _onRefresh = () => {
    this.props.getRequest();
  }


  componentDidMount() {
    this.props.getRequest();
  }

  filter = () => {
    this.props.getRequest(this.state.employee_id, this.state.section_id, this.state.start_date, this.state.end_date);
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
      { value: 1, label: 'Quimico' },
      { value: 2, label: 'Siderurgico' },
      { value: 3, label: 'Mecanico' },
      { value: 4, label: 'Civil' },
    ];
  }

  getPickerEmployeer = () => {
    return [
      { value: 1, label: 'Vinicius' },
      { value: 2, label: 'Luan' },
      { value: 3, label: 'Lucas' },
      { value: 4, label: 'Andre' },
      { value: 5, label: 'Francisco' },
    ];
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-clipboard" style={{ color: tintColor, fontSize: 20 } } />
    ),
    title: 'Header',
    headerTitleStyle: {
      color: '#000',
    }
  }


  render() {
    return (
      <Fragment>
        <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.props.report.loading}
            onRefresh={this._onRefresh}
          />
        }
        >
        <StatusBar barStyle="dark-content"/>
        <View style={styles.filters}>
          <SelectInput
            value={this.state.section_id}
            options={this.getPickerSection()}
            onSubmitEditing={(value) => {this.setState({section_id: value})}}
            style={{ padding: 10 }}
          />
          <SelectInput
            value={this.state.employee_id}
            options={this.getPickerEmployeer()}
            onSubmitEditing={(value) => {this.setState({employee_id: value})}}
            style={{ padding: 10 }}
          />
        </View>
        <View style={styles.date}>
          <DatePicker
            style={{width: 200}}
            date={this.state.start_date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({start_date: date})}}
          />
           <DatePicker
            style={{width: 200}}
            date={this.state.end_date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({end_date: date})}}
          />
          <TouchableOpacity onPress={() => this.filter()} style={styles.buttonFilter}>
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
        <Text style={styles.listTitle}>Indice de Incidências</Text>

        <FlatList
          data={this.props.report.data.data}
          refreshControl={
            <RefreshControl
              refreshing={this.props.report.loading}
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

      </ScrollView>
      <Multometro />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  report: state.report,
});

const mapDispatchToProps = dispatch => bindActionCreators(ReportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReportTab);

