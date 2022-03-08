import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/common/Button';

import Title from '../components/common/Title';
import COLORS from '../theme/Colors';
import {BodyMedium} from '../theme/Fonts';
import ExistingSplitItem from '../components/common/ExistingSplitItem';

const data = [
  {
    id: 0,
    splitName: 'Split Demo 1',
    tripName: 'NA',
    splitMembers: [1, 2, 3, 4, 5, 6, 7, 8],
    totalMembers: 8,
    totalAmount: 3456,
    splitToEach: 432,
    paidBy: 'John Smith',
  },
  {
    id: 1,
    splitName: 'Split Demo 2',
    tripName: 'Lonavala',
    splitMembers: [1, 2, 3, 4, 5, 6, 7, 8],
    totalMembers: 8,
    splitToEach: 432,
    totalAmount: 3456,
    paidBy: 'John Smith',
  },
  {
    id: 2,
    splitName: 'Split Demo 3',
    tripName: 'Goa',
    splitMembers: [1, 2, 3, 4, 5, 6, 7, 8],
    totalAmount: 3456,
    splitToEach: 432,
    totalMembers: 8,
    paidBy: 'John Smith',
  },
  {
    id: 3,
    splitName: 'Split Demo 4',
    tripName: 'Mumbai',
    splitMembers: [1, 2, 3, 4, 5, 6, 7, 8],
    totalAmount: 3456,
    splitToEach: 432,
    totalMembers: 8,
    paidBy: 'John Smith',
  },
];

const HomeScreen = ({navigation}) => {
  //On Each press of split item
  //we navigate to a screen
  const handleSplitItemPress = param => {
    navigation.navigate('Split', {data: param});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <Title title="TripSplit" />
        <TouchableOpacity>
          <Icon
            name="user"
            size={24}
            color={'black'}
            onPress={() => {
              navigation.navigate('Friends');
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={BodyMedium}>Recent Splits</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.index}
            renderItem={({item}) => (
              <ExistingSplitItem
                itemdata={item}
                onPress={handleSplitItemPress}
              />
            )}
            ListEmptyComponent={
              <View>
                <Text>No Split Exist!...{'\n'} Tap on CREATE to make one.</Text>
              </View>
            }
          />
        </View>
        <View
          style={{
            paddingVertical: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <Button
            title="CREATE SPLIT"
            onPress={() => {
              navigation.navigate('CreateSplit');
            }}
            optionalIcon={
              <Icon
                name="plus"
                size={16}
                color={COLORS.OnPrimary}
                style={{marginLeft: 15}}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    padding: 10,
  },
});

export default HomeScreen;
