/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Header.style';

const Header = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Search"
        style={styles.input}
      />
    </View>
  );
};

export default Header;
