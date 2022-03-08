import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';
import Title from '../components/common/Title';
import {TitleLarge, TitleMedium} from '../theme/Fonts';
import Button from '../components/common/Button';

const FriendsScreen = ({navigation}) => {
  const [friendName, setFriendName] = useState();
  const [friendMobile, setFriendMobile] = useState();
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
        <View
          style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
          <View>
            <Text style={TitleLarge}>Add Friends</Text>
          </View>
          <View>
            <TextInput
              value={friendName}
              onChangeText={text => setFriendName(text)}
              placeholder={'Enter Name'}
              style={[TitleMedium, {paddingVertical: 5}]}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextInput
                value={friendMobile}
                onChangeText={text => setFriendMobile(text)}
                placeholder={'Enter Number'}
                style={[TitleMedium, {paddingVertical: 5}]}
              />
              <Button title="ADD" />
            </View>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={TitleLarge}>Friend List</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FriendsScreen;
