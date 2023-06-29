import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ContainerView from '../common/ContainerView';
import DormInput from '../components/DormInput';
import DormButton from '../components/DormButton';
import {AppColors} from '../constants/AppColors';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberChecked = () => {
    setChecked(!checked);
  };

  const handleForgot = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    navigation.navigate('SignUp');
  };

  const handleSignIn = () => {
    navigation.navigate('lists');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ContainerView>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.welcomeBelowText}>Please log in below</Text>
        </View>

        <View
          style={{
            paddingVertical: 30,
          }}>
          <DormInput
            placeholder="Email"
            iconName="email"
            name="email"
            iconColor={AppColors.grey_400}
            iconSize="medium"
          />
          <DormInput
            placeholder="Password"
            iconName="lock"
            name="password"
            iconColor={AppColors.grey_400}
            secureText="true"
            iconSize="medium"
            icon2="true"
            showPassword={showPassword}
            onPress={togglePasswordVisibility}
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

        <DormButton title="Sign in" onPress={handleSignIn} />
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword} onPress={handleForgot}>
            Forgot password?
          </Text>
        </View>

        <View style={styles.registerTextContainer}>
          <Text>Don't have an account?</Text>
          <Text style={styles.registerText} onPress={handleRegister}>
            Register now
          </Text>
        </View>
      </ContainerView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    paddingVertical: 40,
  },
  welcomeText: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 34,
    fontWeight: '600',
    color: AppColors.black,
  },
  welcomeBelowText: {
    fontFamily: 'Urbanist-SemiBold',
    paddingTop: 10,
    fontSize: 13,
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'center',
  },
  forgotPassword: {
    fontFamily: 'Urbanist-SemiBold',
    color: AppColors.main,
    fontSize: 16,
  },
  registerTextContainer: {
    flexDirection: 'row',
    marginTop: 35,
    justifyContent: 'center',
  },
  registerText: {
    marginLeft: 10,
    fontFamily: 'Urbanist-SemiBold',
    color: AppColors.main,
  },
});

export default LoginPage;
