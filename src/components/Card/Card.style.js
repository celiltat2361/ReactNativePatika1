/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin:5,
    flex:1,
    backgroundColor:'lightgray',
    borderRadius: 5,
  },

  image_container: {
    alignItems: 'center',
  },

  image:{
    borderRadius: 10,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').height / 4,
  },

  card: {
    margin:10,
    borderRadius:10,
  },

  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 5,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  inStock: {
    color: 'red',
    fontWeight: '900',
    fontSize: 20,
  },

});
