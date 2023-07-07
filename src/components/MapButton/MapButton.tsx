import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export type ButtonMap = {
  onSelect: () => void;
};

export default function MapButton({onSelect}:ButtonMap) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onSelect} style={styles.button}>
        <Icon name="map-pin" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    left: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '70%',
    marginVertical: 5,
  },
});
