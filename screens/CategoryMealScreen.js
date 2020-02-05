import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import theme from '../constants/theme';
import MealList from '../components/MealList';

// new redux
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0 // almost in_array in php
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navData => {
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: theme.colors.primaryColor
    },
    headerTintColor: 'white'
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
