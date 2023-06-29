import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text} from 'react-native';

import ContainerView from '../common/ContainerView';
import {AppColors} from '../constants/AppColors';
import DormInput from '../components/DormInput';
import DormButton from '../components/DormButton';

const ForgotPasswordPage = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ContainerView styled={{alignItems: 'center'}}>
        <Image
          source={require('../assets/shield.png')}
          style={styles.shieldImage}
        />

        <View style={styles.resetPasswordContainer}>
          <Text style={styles.resetPasswordText}>
            Enter your email to reset password
          </Text>
          <DormInput
            iconName="email"
            iconColor={AppColors.grey_400}
            iconSize="medium"
            placeholder="Email"
          />
        </View>

        <DormButton title="Reset password" />
      </ContainerView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shieldImage: {
    width: 300,
    height: 300,
    marginVertical: 40,
  },
  resetPasswordContainer: {
    width: '100%',
    paddingVertical: 25,
  },
  resetPasswordText: {
    fontFamily: 'Urbanist-SemiBold',
    textAlign: 'center',
    color: AppColors.black,
  },
});

export default ForgotPasswordPage;
