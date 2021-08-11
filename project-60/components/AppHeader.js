import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
  render(){
    return(
      <View style={styles.header}>
      <Text style={styles.text}>School Attendence</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header:{
    backgroundColor:'orange'
  }
})