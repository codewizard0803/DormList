import React from 'react';
import {View} from 'react-native';
import {AppColors} from '../constants/AppColors';

const ContainerView = ({children, styled}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingHorizontal: 24,
        paddingVertical: 32,
        backgroundColor: AppColors.white,
        ...styled,
      }}>
      {children}
    </View>
  );
};

export default ContainerView;
