import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import RoleSelectionScreen from './src/screen/RoleSelection/roleSelectionScreen';
import RoomListScreen from './src/screen/roomList/roomListScreen';
import RoomDetails from './src/screen/RoomDetails/roomDetails';

const App = () => {

  return (
      <RoomListScreen />
  );
};

const styles = StyleSheet.create({
  mainView: {

  }
});

export default App;
