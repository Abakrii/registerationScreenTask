import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TextFieldProps} from './types';
const TextFiled = (props: TextFieldProps) => {
  const {placeholder, value, onChangeText, onBlur} = props;
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </View>
  );
};

export default TextFiled;
