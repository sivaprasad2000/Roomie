import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import RoleSelectionScreen from './src/screen/roleSelectionScreen';

const App = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <RoleSelectionScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
