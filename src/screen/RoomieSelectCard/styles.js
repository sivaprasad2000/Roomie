import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  pictureContainer: {
    margin: 20,
    width: '90%',
    height: 400,
    alignSelf: 'center',
  },
  picture: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
    width: '90%',
    height: 150,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  nameeeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descText: {
    fontSize: 15,
  },
  buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonXcontainer: {
    backgroundColor: 'red',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight:60
  },
  buttonOcontainer: {
    marginLeft:60,
    backgroundColor: 'blue',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
