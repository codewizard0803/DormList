import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import ContainerView from '../common/ContainerView';
import {AppColors} from '../constants/AppColors';
import DormInput from '../components/DormInput';
import DormButton from '../components/DormButton';

const SignUpPage = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleRememberChecked = () => {
    setChecked(!checked);
  };

  const handleTermsService = () => {
    console.log('Term');
  };

  const handlePrivacy = () => {
    console.log('Privacy');
  };

  const handleSignInPage = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ContainerView>
        <View style={styles.joinTextContainer}>
          <Text style={styles.joinText}>Join the Dorm List</Text>
          <Text style={styles.registerText}>Please Register below</Text>
        </View>

        <View style={{paddingVertical: 30}}>
          <DormInput
            placeholder="First name"
            name="firstname"
            iconName="email"
            iconColor={AppColors.grey_400}
            iconSize="medium"
          />
          <DormInput
            placeholder="Last name"
            name="lastname"
            iconName="email"
            iconColor={AppColors.grey_400}
            iconSize="medium"
          />
          <DormInput
            placeholder="Email"
            name="email"
            iconName="email"
            iconColor={AppColors.grey_400}
            iconSize="medium"
          />
          <DormInput
            placeholder="Password"
            name="password"
            iconName="lock"
            iconColor={AppColors.grey_400}
            secureText="true"
            iconSize="medium"
            icon2="true"
            showPassword={showPassword}
            onPress={togglePasswordVisibility}
          />
          <DormInput
            placeholder="Confirm Password"
            name="confirmpassword"
            iconName="lock"
            iconColor={AppColors.grey_400}
            secureText="true"
            iconSize="medium"
            icon2="true"
            showPassword={showConfirmPassword}
            onPress={toggleConfirmPasswordVisibility}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Remember Me"
            checked={checked}
            secureText={true}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checkedColor={AppColors.main}
            uncheckedColor={AppColors.main}
            onPress={toggleRememberChecked}
          />
        </View>

        <DormButton title="Sign up" />

        <View style={styles.signUpAgreeContainer}>
          <Text style={styles.signUpAgreeText}>
            By Signing up, you are agree with our
            <Text style={styles.termServiceText} onPress={handleTermsService}>
              {' '}
              Terms of services
            </Text>
            <Text> and </Text>
            <Text style={styles.privacyText} onPress={handlePrivacy}>
              Privacy Pilicy
            </Text>
          </Text>
        </View>

        <View style={styles.alreadyAccountContainer}>
          <Text style={styles.alreadyAccountText}>
            Already have an account?
          </Text>
          <Text style={styles.signInText} onPress={handleSignInPage}>
            Sign in
          </Text>
        </View>
      </ContainerView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  joinTextContainer: {
    marginVertical: 30,
  },
  joinText: {
    fontWeight: '600',
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 35,
    color: AppColors.black,
  },
  registerText: {
    fontWeight: '400',
    marginTop: 20,
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 16,
    color: AppColors.grey_400,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    borderRadius: 3,
    backgroundColor: AppColors.white,
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 14,
    color: AppColors.black,
  },
  signUpAgreeContainer: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'center',
  },
  signUpAgreeText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 18,
  },
  termServiceText: {
    color: AppColors.main,
  },
  privacyText: {
    color: AppColors.main,
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  alreadyAccountText: {
    color: AppColors.grey_400,
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
  },
  signInText: {
    color: AppColors.main,
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Urbanist-SemiBold',
  },
});

export default SignUpPage;
