import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './components/Card';
import Header from './components/Header';
import products from '../src/products.json';

const App: () => Node = () => {
  const renderProducts = ({item}) => <Card product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>Patika Store App</Text>
      <Header />
      <FlatList
        data={products}
        numColumns={2}
        horizontal={false}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header_text: {
    color: 'purple',
    fontSize: 40,
    textAlign: 'left',
    margin: 5,
  },
});

export default App;
