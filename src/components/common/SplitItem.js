import {View, Text} from 'react-native';
import React from 'react';
import {BodyMedium} from '../../theme/Fonts';

const SplitItem = props => {
  return (
    <View
      key={props.id}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
      }}>
      <Text style={[BodyMedium]}>
        {props === undefined ? 'John Smith' : props.name}
      </Text>
      <Text>{props === undefined ? '500' : props.amount} $</Text>
    </View>
  );
};

export default SplitItem;
