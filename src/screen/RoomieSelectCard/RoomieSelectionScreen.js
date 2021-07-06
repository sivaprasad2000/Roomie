import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const RoomieSelectionScreen = props => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/stock2.jpeg')}
        />
      </View>
      <View>
      <TouchableOpacity style={styles.buttonUpper}>
          <Text style={styles.buttonTextNormal}>X</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RoomieSelectionScreen;
