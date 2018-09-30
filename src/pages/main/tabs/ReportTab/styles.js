import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',


  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 20,
  },
  listTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  buttonFilter: {
    padding: 10,
    backgroundColor: '#C23334',
    marginTop: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
  }
});

export default styles;
