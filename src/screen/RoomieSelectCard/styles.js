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
    height: '65%',
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
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  nameeeText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  descText: {
    fontSize: 20,
  },
  buttonXcontainer: {
    backgroundColor: 'red',
    width: '10%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonOcontainer: {
    marginTop: 20,
    backgroundColor: 'blue',
    width: '10%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
