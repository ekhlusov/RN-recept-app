import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import theme from '../constants/theme';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="white"
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default CustomHeaderButton;
