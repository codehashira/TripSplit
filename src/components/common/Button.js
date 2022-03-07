import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
