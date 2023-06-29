import React from 'react';
import {TextInput, View, Image, TouchableOpacity} from 'react-native';
import {AppColors} from '../constants/AppColors';
import {MaterialIcon} from '../common/MaterialIcon';

const DormInput = ({
  name,
  placeholder,
  onChangeText,
  value,
  iconName,
  iconColor,
  iconSize,
  icon2,
  onPress,
  showPassword,
  secureText,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 15,
        borderRadius: 12,
        backgroundColor: AppColors.grey_200,
      }}>
      <View style={{marginLeft: 20}}>
        <MaterialIcon name={iconName} size={iconSize} color={iconColor} />
      </View>
      <TextInput
        style={{
          paddingVertical: 13,
          paddingHorizontal: 10,
          width: '80%',
        }}
        name={name}
        secureTextEntry={secureText !== undefined ? !showPassword : false}
        placeholder={placeholder}
        placeholderTextColor={AppColors.grey_400}
        onChangeText={onChangeText}
        value={value}
      />
      {icon2 !== undefined ? (
        showPassword === false ? (
          <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/Icons/Hide.png')} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPress}>
            <MaterialIcon
              name="remove-red-eye"
              size="medium"
              color={AppColors.grey_400}
            />
          </TouchableOpacity>
        )
      ) : (
        ''
      )}
    </View>
  );
};

export default DormInput;
