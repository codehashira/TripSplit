/*

    Title - Split Name
    Total Amount - 
    Paid by - 

    Split Members
    MemberName - Amount

*/

import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Title from '../components/common/Title';
import {LabelLarge, TitleMedium} from '../theme/Fonts';
import Button from '../components/common/Button';
import COLORS from '../theme/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';

const SplitScreen = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            padding: 10,
          }}>
          <TouchableOpacity>
            <BackIcon
              name="chevron-back"
              size={24}
              color={'black'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </TouchableOpacity>
          <Title
            title={data.splitName + ' - ' + data.tripName}
            style={{marginLeft: 10}}
          />
        </View>
        <View
          style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
          <View style={{flex: 1}}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: 5,
              }}>
              <Text style={LabelLarge}>Total Amount</Text>
              <Text style={TitleMedium}>{data.totalAmount}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginVertical: 5,
              }}>
              <Text style={LabelLarge}>Paid By</Text>
              <Text style={TitleMedium}>{data.paidBy}</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Button
              title={'Remind'}
              optionalIcon={
                <Icon
                  name="bell"
                  size={12}
                  color={COLORS.OnPrimary}
                  style={{marginLeft: 15}}
                />
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplitScreen;
