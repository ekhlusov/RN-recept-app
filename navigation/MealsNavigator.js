import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Screens
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import theme from '../constants/theme';
import FavouritesScreen from '../screens/FavouritesScreen';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: theme.colors.primaryColor
  },
  headerTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: 'white'
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

// Favs nav
const FavNavigator = createStackNavigator(
  {
    Favorites: FavouritesScreen,
    MealDetails: MealDetailsScreen
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreeConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: theme.colors.primaryColor,
      tabBarLabel: <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
    }
  }, // nested from stack navigator
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: theme.colors.accentColor,
      tabBarLabel: (
        <Text style={{ fontFamily: 'open-sans-bold' }}>My Favorites</Text>
      )
    }
  }
};

// Tabs
const MealsFavTabs =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreeConfig, {
        activeTintColor: 'white',
        shifting: true
      })
    : createBottomTabNavigator(tabScreeConfig, {
        tabBarOptions: {
          activeTintColor: theme.colors.accentColor
        }
      });

const FiltersNav = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    navigationOptions: {
      drawerLabel: 'Filters!!'
    },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// Drawer
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabs,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNav
  },
  {
    contentOptions: {
      activeTintColor: theme.colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);
export default createAppContainer(MainNavigator);
