import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TitleMedium} from '../../theme/Fonts';

const Title = props => {
  return (
    <View>
      <Text style={[styles.title, TitleMedium, props.style]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
});

export default Title;
