import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';

import StarterPage from './app/pages/StarterPage';
import LoginPage from './app/pages/LoginPage';
import ForgotPasswordPage from './app/pages/ForgotPasswordPage';
import SignUpPage from './app/pages/SignUpPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Start"
            component={StarterPage}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerTitle: ''}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordPage}
            options={{headerTitle: 'Forgot Password'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{headerTitle: ''}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
