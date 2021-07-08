import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';


import RoleSelectionScreen from './src/screen/RoleSelection/roleSelectionScreen';
import RoomieSelectionScreen from './src/screen/RoomieSelectCard/RoomieSelectionScreen';
import Matchuserlist from './src/screen/Matchuserlist/matchuserlist';

const App = () => {

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar /> 
      <Matchuserlist />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {

  }
});

export default App;
