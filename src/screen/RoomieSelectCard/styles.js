import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  logo: {
    width: 300,
    height: 500,
  },
  buttonTextNormal: {
    fontFamily: 'Righteous-Regular',
    fontSize: 40,
  },
  buttonUpper: {
    backgroundColor: '#fff',
    width: '30%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft:10,
  },
});

export default styles;
