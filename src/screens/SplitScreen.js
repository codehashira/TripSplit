/*

    Title - Split Name
    Total Amount - 
    Paid by - 

    Split Members
    MemberName - Amount

*/

import {View, Text, StatusBar, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import BackIcon from 'react-native-vector-icons/Ionicons';
import Title from '../components/common/Title';
import {BodyMedium, TitleLarge, LabelLarge, TitleMedium} from '../theme/Fonts';
import Button from '../components/common/Button';
import COLORS from '../theme/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';
import TextButton from '../components/common/TextButton';
import SplitMemberItem from '../components/common/SplitMemberItem';

const SplitScreen = ({route, navigation}) => {
  const {data} = route.params;
  console.log(data.splitMembers);
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
            <View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginVertical: 5,
                }}>
                <Text style={[TitleLarge, COLORS.OnSurface]}>Split Into</Text>
                <TextButton title="SELECT ALL" />
              </View>
              <FlatList
                data={data.splitMembers}
                keyExtractor={item => {
                  return item;
                }}
                renderItem={({item}) => {
                  return (
                    <SplitMemberItem name={item} amount={data.splitToEach} />
                  );
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginRight: 10,
                  borderRadius: 50,
                  borderWidth: 1,
                  height: 20,
                  width: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'gray',
                }}>
                <Icon name="info" size={10} style={{lineHeight: 20}} />
              </View>

              <Text style={[BodyMedium, {paddingVertical: 10}]}>
                TripSplit uses local SMS Service.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplitScreen;
