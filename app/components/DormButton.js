import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {AppColors} from '../constants/AppColors';

const DormButton = ({title, color, textColor, onPress, style}) => {
  return (
    <View
      style={{
        width: '100%',
        ...style,
      }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={{
          borderRadius: 25,
          backgroundColor: color ? color : AppColors.main,
        }}>
        <Text
          style={{
            paddingVertical: 15,
            fontFamily: 'Urbanist-SemiBold',
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
            color: textColor ? textColor : AppColors.white,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DormButton;
