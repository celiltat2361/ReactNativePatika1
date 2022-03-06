/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Card.style';

const Card = ({product}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.image_container}>
          <Image
            style={styles.image}
            source={{uri: product.imgURL}}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.text_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.inStock}>{product.inStock ? '' : 'Out of stock' }</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Card;
