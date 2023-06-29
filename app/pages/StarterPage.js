import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import DormButton from '../components/DormButton';
import {AppColors} from '../constants/AppColors';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import ContainerView from '../common/ContainerView';

const StarterPage = () => {
  const [step, setStep] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    Orientation.lockToPortrait();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const onNextHandler = () => {
    if (step == 2) {
      navigation.navigate('Login');
    } else {
      setStep(step + 1);
    }
  };

  const onSkipHandler = () => {
    navigation.navigate('Login');
  };

  const getTitle = () => {
    switch (step) {
      case 0:
        return 'Create and manage your custom dorm essentials list';
      case 1:
        return 'Save time on college dorm shopping';
      case 2:
        return 'Be confident everything will arrive for move-in day';
    }
  };

  const getDetail = () => {
    switch (step) {
      case 0:
        return 'Create and manage your custom dorm essentials listShopping for dorm essentials is overwhelming. The Dorm List allows you to build and manage a custom dorm essential list so you are ready for move-in day with everything your freshman needs.';
      case 1:
        return "It's easy to spend hours and hours shopping online for dorm essentials. Save time on product research and selection. Choose from pre-vetted, highly rated products. We select top items and frequently update our product suggestions.";
      case 2:
        return "You have a lot to buy before move-in day. And if you're shipping ahead, keeping track of everything is challenging. Dorm List makes it easy. Easily manage everything you've purchased and ordered in one place and make real-time updates to your list.";
    }
  };

  return (
    <SafeAreaView>
      <ContainerView
        styled={{
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: AppColors.white,
        }}>
        <Image
          source={require('../assets/shield.png')}
          style={{
            width: 300,
            height: 300,
          }}
        />
        <View style={{height: 240}}>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 32,
              fontWeight: '500',
              fontFamily: 'Urbanist-SemiBold',
              textAlign: 'center',
              color: AppColors.black,
            }}>
            {getTitle()}
          </Text>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Urbanist-SemiBold',
              textAlign: 'center',
              color: AppColors.black_100,
            }}>
            {getDetail()}
          </Text>
        </View>

        <View style={{width: '100%'}}>
          <View
            style={{
              width: '100%',
              paddingVertical: 30,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor:
                  step == 0 ? AppColors.main : AppColors.grey_300,
                marginHorizontal: 5,
              }}></View>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor:
                  step == 1 ? AppColors.main : AppColors.grey_300,
                marginHorizontal: 5,
              }}></View>
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 5,
                backgroundColor:
                  step == 2 ? AppColors.main : AppColors.grey_300,
                marginHorizontal: 5,
              }}></View>
          </View>
          <DormButton title={'Next'} onPress={onNextHandler} />
          <DormButton
            title={'Skip'}
            color={AppColors.grey_300}
            textColor={AppColors.lightBalck}
            onPress={onSkipHandler}
            style={{
              paddingVertical: 10,
            }}
          />
        </View>
      </ContainerView>
    </SafeAreaView>
  );
};

export default StarterPage;
