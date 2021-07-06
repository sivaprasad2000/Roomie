import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const RoleSelectionScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.upper}>
        <Text style={styles.logo}> Roomie </Text>
      </View>
      <View style={styles.lower}>
        <TouchableOpacity style={styles.buttonUpper}>
          <Text style={styles.buttonTextNormal}>Rent out a place</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLower}>
          <Text style={styles.buttonTextNormal}>Find a</Text>
          <Text style={styles.buttonTextCursive}>Roomie</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoleSelectionScreen;
