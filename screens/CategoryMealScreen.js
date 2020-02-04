import React from 'react';
import { StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import theme from '../constants/theme';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryId.indexOf(catId) >= 0 // almost in_array in php
  );

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
    flex: 1
  }
});

export default CategoryMealScreen;
