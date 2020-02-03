import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import theme from '../constants/theme';
import FavouritesScreen from '../screens/FavouritesScreen';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
);

// Tabs
const MealsFavTabs = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        )
      }
    }, // nested from stack navigator
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: {
        tabBarLabel: 'My Favourites',
        tabBarIcon: tabInfo => (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavTabs);
