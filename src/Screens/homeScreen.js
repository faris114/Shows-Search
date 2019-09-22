import axios from 'axios';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Card from '../Components/Card/card';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class HomeScreen extends React.Component {
  state = {
    shows: [],
    isLoading: true,
    search: false,
    title: 0,
    titleSaved: false,
  };

  componentDidMount() {
    this.getData();
  }
  toggleSearch = () => {
    this.setState({
      search: true,
      titleSaved: false,
    });
  };
  setSearchedTitle = searchedTitle => {
    const titles = [];
    this.state.shows.map((currentValue, index) => {
      return titles.push(this.state.shows[index].data.name);
    });
    titles.filter((currentValue, index) => {
      if (searchedTitle.toLowerCase() === titles[index].toLowerCase()) {
        this.setState({title: index, titleSaved: true});
      }
    });
  };
  backToHome = () => {
    this.setState({search: false});
  };
  getData = () => {
    const requestUrls = Array.from({length: 9}).map(
      (_, idx) => `http://api.tvmaze.com/shows/${idx + 1}`,
    );

    const handleResponse = data => {
      this.setState({
        isLoading: false,
        shows: data,
      });
    };
    const handleError = error => {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    };

    Promise.all(requestUrls.map(url => axios.get(url)))
      .then(handleResponse)
      .catch(handleError);
  };

  render() {
    const {isLoading, shows, search, title} = this.state;
    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else if (!search) {
      return (
        <View>
          <View>
            <TouchableOpacity
              onPress={this.toggleSearch}
              style={styles.searchBar}>
              <Text style={styles.buttonText}>Press to Search</Text>
              <Icon name="search" size={30} color="grey" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.cardContainer}>
            {shows.length &&
              shows.map((show, index) => {
                return (
                  <Card
                    key={show.data.id}
                    title={show.data.name}
                    rating={show.data.rating.average}
                    source={show.data.image.medium}
                    genres={show.data.genres}
                    language={show.data.language}
                    network={show.data.network}
                    schedule={show.data.schedule}
                    summary={show.data.summary}
                    navigation={this.props.navigation}
                  />
                );
              })}
          </ScrollView>
        </View>
      );
    } else if (search && !isLoading) {
      return (
        <View>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.input}
              onChangeText={searchedTitle => {
                this.setSearchedTitle(searchedTitle);
              }}
            />
            <Icon name="search" size={30} color="grey" />
          </View>

          {this.state.titleSaved ? (
            <ScrollView>
              <Card
                title={shows[title].data.name}
                rating={shows[title].data.rating.average}
                source={shows[title].data.image.medium}
                genres={shows[title].data.genres}
                language={shows[title].data.language}
                network={shows[title].data.network}
                schedule={shows[title].data.schedule}
                summary={shows[title].data.summary}
                navigation={this.props.navigation}
              />
              <View style={styles.pressShows}>
                <TouchableOpacity
                  onPress={this.backToHome}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Press for all shows</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          ) : null}
          <View style={styles.pressShows}>
            <TouchableOpacity onPress={this.backToHome} style={styles.button}>
              <Text style={styles.buttonText}>Press for all shows</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  searchOpacity: {},
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 6,
  },
  input: {
    borderColor: 'gray',
    width: 300,
  },
  button: {
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
  pressShows: {marginBottom: 40, alignItems: 'center'},
  cardContainer: {backgroundColor: '#E1E8E7'},
});
