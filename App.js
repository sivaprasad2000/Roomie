import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import RoleSelectionScreen from './src/screen/RoleSelection/roleSelectionScreen';
import RoomListScreen from './src/screen/roomList/roomListScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar /> 
      <RoomListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {

  }
});

export default App;
