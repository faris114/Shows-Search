import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Faris</Text>
      <Icon name="id-card" size={30} color="black" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('6%'),
    width: wp('100%'),
    justifyContent: 'space-evenly',
    backgroundColor: '#3C948B',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
