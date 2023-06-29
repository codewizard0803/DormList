import React, {useState} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import ContainerView from '../../common/ContainerView';
import {AppColors} from '../../constants/AppColors';
import DormList from '../../components/DormList';

const MyList = () => {
  const [checked, setChecked] = useState(false);

  const toggleListChecked = () => {
    setChecked(!checked);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ContainerView>
        <View style={styles.IconContainer}>
          <Image
            source={require('../../assets/Icons/dormListIcon/android/drawable-mdpi/Frame.png')}
          />
        </View>
        <Text style={styles.myListText}>My Lists</Text>
        <View>
          <DormList
            title="Kickoff Meeting Project"
            content="Today - 12.00 PM"
            checked={checked}
            toggleListChecked={toggleListChecked}
          />
          <DormList
            title="Kickoff Meeting Project"
            content="Today - 12.00 PM"
            checked={checked}
            toggleListChecked={toggleListChecked}
          />
          <DormList
            title="Kickoff Meeting Project"
            content="Today - 12.00 PM"
            checked={checked}
            toggleListChecked={toggleListChecked}
          />
          <DormList
            title="Kickoff Meeting Project"
            content="Today - 12.00 PM"
            checked={checked}
            toggleListChecked={toggleListChecked}
          />
        </View>
      </ContainerView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  IconContainer: {
    marginVertical: 20,
  },
  myListText: {
    marginVertical: 20,
    color: AppColors.black,
    fontFamily: 'Urbanist-SemiBold',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default MyList;
