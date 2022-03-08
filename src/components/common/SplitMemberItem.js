import {View, Text} from 'react-native';
import React from 'react';
import TextButton from './TextButton';
import {BodySmall, TitleMedium, TitleSmall} from '../../theme/Fonts';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './IconButton';
import COLORS from '../../theme/Colors';

const SplitMemberItem = props => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // paddingVertical: 2,
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={[TitleMedium]}>{props.name}</Text>
        <Text> • </Text>
        <Text style={TitleSmall}>{props.amount}</Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <IconButton
          Icon={<Icon name="pencil" size={18} color={COLORS.Primary} />}
        />
        <IconButton
          Icon={<Icon name="remove" size={18} color={COLORS.Error} />}
        />
      </View>
    </View>
  );
};

export default SplitMemberItem;
