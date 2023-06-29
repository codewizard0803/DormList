import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {AppColors} from '../constants/AppColors';
import {Shadow} from 'react-native-shadow-2';

const DormList = ({title, content, checked, toggleListChecked}) => {
  return (
    <Shadow
      distance={5}
      startColor={checked ? '#0000100' : '#00000010'}
      containerViewProps={{
        marginVertical: 20,
      }}
      style={{width: '100%'}}>
      <View style={styles.card}>
        <View>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={checked}
            secureText={true}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
            checkedColor={AppColors.main}
            uncheckedColor={AppColors.main}
            onPress={toggleListChecked}
          />
        </View>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Urbanist-SemiBold',
    marginBottom: 13,
    color: AppColors.black,
  },
  card: {
    backgroundColor: 'white',
    borderRightColor: AppColors.black,
    paddingVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 14,
    marginVertical: 15,
    color: AppColors.black,
  },
  checkboxContainer: {
    marginBottom: 30,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
  checkbox: {
    borderRadius: 3,
    backgroundColor: AppColors.white,
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
});

export default DormList;
