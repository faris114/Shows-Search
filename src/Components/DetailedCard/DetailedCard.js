import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';

const DetailedCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: `${props.source}`}} />
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>Rating: {props.rating}</Text>
        <Icon name="star" size={30} color="grey" />
      </View>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>Language: {props.language}</Text>
        <Icon name="language" size={30} color="black" />
      </View>

      <View style={styles.genresContainer}>
        <Text style={styles.genres}>Genres: {props.genres.toString()}</Text>
      </View>
      <View>
        <View style={styles.networkDetails}>
          <Text style={styles.network}>Network name: {props.network.name}</Text>
          <Text style={styles.countryName}>
            Country name: {props.network.country.name}
          </Text>
          <Text style={styles.countryCode}>
            Country code: {props.network.country.code}
          </Text>
          <Text style={styles.timezone}>
            Timezone: {props.network.country.timezone}
          </Text>
        </View>
        <View style={styles.scheduleContainer}>
          <Text style={styles.schedule}>
            Schedule: {props.schedule.time},{props.schedule.days}
          </Text>
          <Icon name="calendar" size={30} color="black" />
        </View>
        <Text style={styles.summary}>Summary:</Text>
        <View style={styles.summaryContainer}>
          <Text>{props.summary.replace(/<p>|<\/p\>|<b>|<\/b\>/gi, '')}</Text>
        </View>
      </View>
    </View>
  );
};
export default DetailedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {flex: -1, width: wp('90%'), height: hp('65%')},
  networkDetails: {
    flex: -1,
    margin: 20,
    elevation: 5,
    alignItems: 'center',
    minWidth: 300,
    minHeight: 100,
    borderRadius: 0.1,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(60, 148, 139, 0.8)',
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    backgroundColor: 'white',
    elevation: 6,
  },
  language: {
    minHeight: 50,
    fontSize: 25,
    textAlign: 'center',
  },
  genresContainer: {
    elevation: 6,
    margin: 20,
    backgroundColor: 'white',
  },
  genres: {
    fontSize: 25,
    textAlign: 'center',
  },
  network: {fontSize: 20},
  countryName: {fontSize: 15},
  countryCode: {fontSize: 15},
  timezone: {fontSize: 15},
  scheduleContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'space-between',
    width: 300,
    paddingLeft: 15,
    paddingRight: 15,
  },
  schedule: {
    fontSize: 20,
  },
  summary: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  summaryContainer: {
    minWidth: 300,
    minHeight: 150,
    fontSize: 15,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    elevation: 10,
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 6,
    justifyContent: 'space-between',
    borderWidth: 1,
    width: 300,
    margin: 10,
  },
  rating: {
    fontSize: 25,
    paddingLeft: 15,
  },
});
