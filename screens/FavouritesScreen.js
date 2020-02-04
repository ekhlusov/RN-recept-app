import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import HeaderLeftMenuBar from '../components/HeaderLeftMenuBar';

const FavouritesScreen = props => {
  const favs = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favs} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => <HeaderLeftMenuBar navData={navData} />
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen;
