/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 
 export default class App extends React.Component {
    render() {
       return (
          <View style = {styles.container}>
             <Text>Hello React Native!</Text>
          </View>
       );
    }
 }
 
 const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
 });