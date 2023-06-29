import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color}) => (
  <Icon name={name} size={IconSizes[size]} color={color} />
);
