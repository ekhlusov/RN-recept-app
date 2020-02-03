import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Cats"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

// Title
MealDetailsScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons
        title="Fav Buttons"
        HeaderButtonComponent={CustomHeaderButton}
      >
        <Item
          title="Fav"
          iconName="ios-star"
          onPress={() => {
            alert('Fav saved');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailsScreen;
