import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const RoomieSelectionScreen = props => {
  return (
    <View styles={styles.container}>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.picture}
          source={require('../../assets/stock2.jpeg')}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nameeeText}>Ivin,20</Text>
        <Text style={styles.descText}>
          I have a lot of hobbies but the favorite one that I like most is
          playing football. When I have free time, I love to play football. I’m
          a big fan of football since my childhood. I have been very well in
          this soccer game. backgroundColor : "black", 
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.buttonXcontainer}>
          <Text style={styles.buttonTextX}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOcontainer}>
          <Text style={styles.buttonTextO}>O</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoomieSelectionScreen;
