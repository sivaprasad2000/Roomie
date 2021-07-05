import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import RoleSelectionScreen from './src/screen/roleSelectionScreen';

const App = () => {

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar /> 
      <RoleSelectionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {

  }
});

export default App;
