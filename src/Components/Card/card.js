import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri: `${props.source}`}} />
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {props.rating}</Text>
        <Icon name="star" size={30} color="grey" />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate('Details', {
            title: props.title,
            rating: props.rating,
            source: props.source,
            genres: props.genres,
            language: props.language,
            network: props.network,
            schedule: props.schedule,
            summary: props.summary,
          });
        }}>
        <Text style={styles.buttonText}>Press for details </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Image: {
    flex: -1,
    width: wp('90%'),
    height: hp('65%'),
  },
  title: {
    flex: 1,
    fontSize: 40,
    borderRadius: 10,
    color: '#3C948B',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'space-between',
    borderWidth: 1,
    width: 300,
  },
  rating: {
    fontSize: 25,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
    color: '#3C948B',
    backgroundColor: '#3C948B',
    height: hp('7%'),
    width: wp('70%'),
    margin: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    flex: 1,
    fontSize: 25,
  },
});
