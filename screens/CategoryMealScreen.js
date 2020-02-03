import React from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import theme from '../constants/theme';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    meal => meal.categoryId.indexOf(catId) >= 0 // almost in_array in php
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity.toUpperCase()}
        affordability={itemData.item.affordability.toUpperCase()}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.id
            }
          })
        }
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  );
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
