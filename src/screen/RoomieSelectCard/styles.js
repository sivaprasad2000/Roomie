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
    paddingBottom: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: '#5c5c5c',
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
    resizeMode: 'cover',
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '90%',
    height: 150,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  nameeeText: {
    marginLeft: 10,
    fontSize: 25,
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
    backgroundColor: '#c91e12',
    width: 90,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 60,
  },
  buttonOcontainer: {
    marginLeft: 60,
    backgroundColor: '#2eb519',
    width: 90,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
