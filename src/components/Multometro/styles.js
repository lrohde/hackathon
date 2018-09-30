import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    borderTopColor: '#bbb',
    backgroundColor: '#C23334',
    borderTopWidth: 1,
  },
  titleContainer: {

  },
  titleText: {
    fontSize: 16,
    color: '#fff',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: 15,
  },
  priceText: {
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold',
    color: '#fff',

  },
  price: {
    flexDirection: 'row',
    padding: 5,
    color: '#fff',
  },
});

export default styles;
