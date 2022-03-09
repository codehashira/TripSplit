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
        <View style={{minWidth: 70}}>
          <Text style={[TitleMedium, {color: COLORS.OnSurface}]}>
            {props.name}
          </Text>
        </View>
        {/* <Text> • </Text> */}
        <Text style={[TitleSmall, {color: COLORS.Success}]}>
          {props.amount}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <IconButton
          Icon={<Icon name="pencil" size={14} color={COLORS.Primary} />}
        />
        <IconButton
          Icon={<Icon name="remove" size={14} color={COLORS.Error} />}
        />
      </View>
    </View>
  );
};

export default SplitMemberItem;
