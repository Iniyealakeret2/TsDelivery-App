
import React from 'react';

import { StyleSheet, Text, View, StatusBar} from 'react-native';

import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';


function App(props) {
  return (
    <View style = {styles.container}>
      <StatusBar
        barStyle = "light-content"
        backgroundColor = {colors.statusBar}
      />
    <RootNavigator/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App;