import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={[
        {time: '07:00', event: 'Jack milk'},
        {time: '07:00', event: 'Joshua up'},
        {time: '07:00', event: 'Joshua toilet break'},
        {time: '08:00', event: 'Breakfast'},
        {time: '08:30', event: 'Empty dishwasher'},
        {time: '08:30', event: 'Teeth brushed'},
        {time: '08:30', event: 'Everybody dressed'},
        {time: '09:30', event: 'Joshua toilet break'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
        {time: '09:30', event: 'Snack'},
      ]}
      renderItem = {({item}) => <Text style={styles.item}>{item.time} => {item.event}</Text>}
      />
      <View style={styles.addButton}>
        <Text style={styles.buttonText}>Add Item</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  addButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
  }
});
