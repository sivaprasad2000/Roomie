import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

//import RoleSelectionScreen from './src/screen/RoleSelection/roleSelectionScreen';
//import RoomieSelectionScreen from './src/screen/RoomieSelectCard/RoomieSelectionScreen';
import ChatScreenBasic from './src/screen/ChatScreenBasic/chatScreenBasic';

const App = () => {

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar /> 
      <ChatScreenBasic/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {

  }
});

export default App;
