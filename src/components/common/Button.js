import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import COLORS from '../../theme/Colors';
import {LabelLarge} from '../../theme/Fonts';

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
      activeOpacity={0.9}>
      <Text style={[LabelLarge, styles.buttonText, , props.textColor]}>
        {props.title}
      </Text>
      {props.optionalIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    backgroundColor: COLORS.Primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {color: COLORS.OnPrimary, textAlign: 'center'},
});

export default Button;
