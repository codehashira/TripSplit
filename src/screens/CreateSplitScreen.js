import {View, Text, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import SafeAreaView from 'react-native-safe-area-view';
import Title from '../components/common/Title';
import {TitleMedium} from '../theme/Fonts';
import TextButton from '../components/common/TextButton';
import SplitItem from '../components/common/SplitItem';
import Button from '../components/common/Button';
import OutlinedButton from '../components/common/OutlinedButton';
/*

  Split Name - 
  Trip Name - 
  Total Amount - 
  Paid By - 
  Split Members - 
  OK CANCEL

*/

const Data = [
  {
    id: 0,
    name: 'After Morning',
    amount: '599',
  },
  {
    id: 1,
    name: 'Before Morning',
    amount: '699',
  },
  {
    id: 2,
    name: 'After Evening',
    amount: '799',
  },
  {
    id: 3,
    name: 'Before Evening',
    amount: '899',
  },
];

const CreateSplitScreen = ({navigation}) => {
  const [splitName, setSplitName] = useState('');
  const [tripName, setTripName] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');

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
            paddingHorizontal: 10,
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
          <Title title={'Create Split'} style={{marginLeft: 10}} />
        </View>

        <View
          style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 10}}>
          <TextInput
            value={splitName}
            onChangeText={text => setSplitName(text)}
            placeholder="Split Name"
            style={[TitleMedium, {paddingVertical: 10}]}
          />
          <TextInput
            value={tripName}
            onChangeText={text => setTripName(text)}
            placeholder="Trip Name (optional)"
            style={[TitleMedium, {paddingVertical: 10}]}
          />
          <TextInput
            value={totalAmount}
            onChangeText={text => setTotalAmount(text)}
            placeholder="Total Amount"
            keyboardType={'number-pad'}
            style={[TitleMedium, {paddingVertical: 10}]}
          />
          <TextInput
            value={paidBy}
            onChangeText={text => setPaidBy(text)}
            placeholder="Paid By"
            style={[TitleMedium, {paddingVertical: 10}]}
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{paddingVertical: 10}}>
              <Text style={[TitleMedium, {marginLeft: 4}]}>
                Split With 0 People
              </Text>
            </TouchableOpacity>
            <TextButton title={'ADD'} />
          </View>
          <View style={{paddingHorizontal: 4}}>
            {Data.map(item => (
              <SplitItem id={item.id} name={item.name} amount={item.amount} />
            ))}
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Button title={'CREATE'} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateSplitScreen;
