import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import DetailedCard from '../Components/DetailedCard/DetailedCard';

export default class DetailsScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    const title = navigation.getParam('title');
    const rating = navigation.getParam('rating');
    const source = navigation.getParam('source');
    const genres = navigation.getParam('genres');
    const language = navigation.getParam('language');
    const network = navigation.getParam('network');
    const schedule = navigation.getParam('schedule');
    const summary = navigation.getParam('summary');

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView>
          <DetailedCard
            title={title}
            rating={rating}
            source={source}
            genres={genres}
            language={language}
            network={network}
            schedule={schedule}
            summary={summary}
          />
        </ScrollView>
      </View>
    );
  }
}
