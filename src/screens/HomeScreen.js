import {
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import Title from '../components/common/Title';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
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
