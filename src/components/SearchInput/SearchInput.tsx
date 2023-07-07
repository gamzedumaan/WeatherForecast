import {StyleSheet, View, TextInput, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

export type Input = {
  placeholder: string;
  value: string;
  onChangeText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  callFunction: () => void;
};
export default function SearchInput({
  value,
  onChangeText,
  text,
  callFunction,
}: Input) {
  return (
    <View style={styles.input_Container}>
      <Icon name="search" size={24} color="black" />
      <TextInput
        textAlign="left"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={text}
        returnKeyType="search"
        onSubmitEditing={callFunction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#EAEAEA',
  },
  input: {
    fontSize: 15,
    height: 42,
    width: '55%',
    marginVertical: 5,
  },
});
