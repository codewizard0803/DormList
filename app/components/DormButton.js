import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

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
          backgroundColor: color ? color : '#FF866D',
        }}>
        <Text
          style={{
            paddingVertical: 15,
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
            color: textColor ? textColor : '#FFFFFF',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DormButton;
