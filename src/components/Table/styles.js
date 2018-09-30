import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
  },
  th: {
    padding: 5,
    color: '#000',
  },
  thText: {
    color: '#000',
  },
  tr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  td: {
    padding: 5,
    justifyContent: 'flex-start',

  },
  tdText: {
    color: '#727272',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  statusRed: {
    backgroundColor: '#d32f2f',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  statusGreen: {
    backgroundColor: '#388e3c',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default styles;
