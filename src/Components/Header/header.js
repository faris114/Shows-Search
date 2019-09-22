import React from 'react';
import {Image, View} from 'react-native';
import TvmApi from '../../assets/TvmApi.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Header = () => (
  <View>
    <Image source={TvmApi} style ={{
    height: hp('10%'), // 70% of height device screen
    width: wp('100%'),   // 80% of width device screen
  }}/>
  </View>
);

export default Header;
