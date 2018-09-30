import React, { Fragment } from 'react';
import { Text, View, StatusBar} from 'react-native';

import styles from './styles';

const Table = ({ data }) => {
  console.tron.log(data)
  return (
    <View style={styles.container}>

    <View style={styles.table}>
    <View style={styles.title}>
      <Text style={styles.titleText}>Indice de Irregularidades</Text>
    </View>
      <View style={styles.tr}>
        <View style={styles.th}>
          <Text style={styles.thText}>Nome</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.tdText}>Status</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.tdText}>Capacete</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.tdText}>Luva</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.tdText}>Oculos</Text>
        </View>
      </View>
    {
      data
      ? data.data.map(dt =>{
        return(
          <Fragment>
            <View style={styles.tr}>
              <View style={styles.th}>
                <Text style={styles.thText}>{dt.employee.name}</Text>
              </View>
              <View style={styles.td}>
                <View style={dt.status== 1 ? styles.statusGreen :  styles.statusRed} />
              </View>
              <View style={styles.td}>
                <Text style={styles.tdText}>Capacete</Text>
              </View>
              <View style={styles.td}>
                <Text style={styles.tdText}>Luva</Text>
              </View>
              <View style={styles.td}>
                <Text style={styles.tdText}>Oculos</Text>
              </View>
            </View>
          </Fragment>
        );
      })
      :null
    }



         </View>
   </View>
  );
}


export default Table;
