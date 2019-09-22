import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './Screens/homeScreen';
import DetailsScreen from './Screens/detailsScreen';

const AppNavigator = createStackNavigator({
    Home: {   screen: HomeScreen,
      initialRouteName: 'Home',
  },
  Details: {
    screen:DetailsScreen,
    navigationOptions: ({ navigation }) => ({
    title: navigation.getParam('title'),
  }),
  },

});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
