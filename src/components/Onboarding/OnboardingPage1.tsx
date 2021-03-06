import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/OnboardingStyles';
import { states } from './onboardingData';
import { CreateHomeInput } from '../../API';

interface Props {
  setHomeData({}): void;
  homeData: CreateHomeInput;
}

const Page1: React.FC<Props> = ({ setHomeData, homeData }) => {
  const [zipcode, setZipcode] = useState(homeData.zipcode);
  const [addressLine1, setAddress] = useState(String(homeData.addressLine1));
  const [city, setCity] = useState(String(homeData.city));
  const [yearBuilt, setYear] = useState(String(homeData.yearBuilt));
  const [addressState, setState] = useState(homeData.addressState);

  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate('Page 2');
    setHomeData({
      ...homeData,
      zipcode,
      addressLine1,
      city,
      addressState,
      yearBuilt: parseInt(yearBuilt, 10),
    });
  };

  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={0}
      extraScrollHeight={25}
      enableOnAndroid
      contentContainerStyle={{ flexGrow: 1, height: 800 }}
      scrollToOverflowEnabled
    >
      <View style={styles.pageContainer}>
        <View style={styles.background} />
        <View style={{ ...styles.formContainer, alignItems: 'center' }}>
          <Text style={{ fontSize: 26, paddingTop: 61 }}>Home Info</Text>
          <Text style={styles.description}>
            Complete the following questions about your current home.
          </Text>

          <View style={styles.form}>
            <Text style={{ paddingVertical: 20 }}>1 of 4</Text>
            <Progress.Bar
              progress={0.25}
              width={null}
              color="rgba(233, 102, 97, 1)"
              style={{ width: '90%' }}
            />
            <Text style={styles.formTitle}>Basic Information</Text>
            <Text style={styles.formComponent}>Zip Code *</Text>
            <TextInput
              style={zipcode === '' ? styles.redFormInput : styles.formInput}
              value={zipcode}
              onChangeText={setZipcode}
              keyboardType="number-pad"
            />
            <Text style={styles.formComponent}>Address *</Text>
            <TextInput
              style={
                addressLine1 === '' ? styles.redFormInput : styles.formInput
              }
              value={addressLine1}
              onChangeText={setAddress}
            />
            <Text style={styles.formComponent}>City</Text>
            <TextInput
              style={styles.formInput}
              value={city}
              onChangeText={setCity}
            />
            <Text style={styles.formComponent}>State</Text>
            <DropDownPicker
              style={styles.dropdownPicker}
              containerStyle={{ height: 40 }}
              items={states}
              dropDownStyle={{ width: '90%' }}
              itemStyle={{ justifyContent: 'flex-start', paddingLeft: '2%' }}
              placeholder=""
              onChangeItem={item => setState(item.value)}
              defaultValue={homeData.addressState}
            />
            <Text style={styles.formComponent}>Year Home was Built</Text>

            <TextInput
              style={styles.formInput}
              value={yearBuilt}
              onChangeText={setYear}
              keyboardType="number-pad"
            />
            {zipcode !== '' && addressLine1 !== '' ? (
              <TouchableOpacity style={styles.button} onPress={nextPage}>
                <Text
                  style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  ...styles.button,
                  backgroundColor: '#778899',
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Page1;
