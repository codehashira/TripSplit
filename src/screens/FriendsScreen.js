import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';
import Title from '../components/common/Title';

const FriendsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
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
          <Title title={'Members'} style={{marginLeft: 10}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
          <Text>Friends</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
