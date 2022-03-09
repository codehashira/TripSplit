import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
import {BodySmall, LabelLarge, TitleMedium} from '../../theme/Fonts';
import COLORS from '../../theme/Colors';

const ExistingSplitItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
      }}
      onPress={() => {
        props.onPress(props.itemdata);
      }}>
      <View>
        <Text style={(TitleMedium, {color: COLORS.OnSurface})}>
          {props.itemdata.splitName}
        </Text>
        <Text style={BodySmall}>
          {props.itemdata.splitToEach}
          {' $'} • {props.itemdata.totalMembers} {'People'} •{' '}
          {props.itemdata.tripName}
        </Text>
      </View>
      <View>
        <Text style={(LabelLarge, {textAlign: 'right', color: COLORS.Success})}>
          {props.itemdata.totalAmount}
          {' $'}
        </Text>
        <Text style={BodySmall}>Paid by {props.itemdata.paidBy}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ExistingSplitItem;
