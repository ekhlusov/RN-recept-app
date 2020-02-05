import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MealList from '../components/MealList';
import HeaderLeftMenuBar from '../components/HeaderLeftMenuBar';

// new redux
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {
  const favs = useSelector(state => state.meals.favoriteMeals);
  if (favs.length === 0 || !favs) {
    return (
      <View style={styles.screen}>
        <DefaultText>No Favorite Meals Found. Start adding some!</DefaultText>
      </View>
    );
  }
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
