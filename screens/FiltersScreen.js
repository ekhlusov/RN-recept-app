import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch, ToastAndroid } from 'react-native';
import HeaderLeftMenuBar from '../components/HeaderLeftMenuBar';
import theme from '../constants/theme';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';

// new redux
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals.action';

const FilterSwitch = props => (
  <View style={styles.filterContainer}>
    <DefaultText>{props.label}</DefaultText>
    <Switch
      trackColor={{ true: theme.colors.primaryColor }}
      thumbColor={theme.colors.primaryColor}
      value={props.state}
      onValueChange={props.onSwitch}
    />
  </View>
);

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  // memory leak and update fix
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    // redux
    dispatch(setFilters(appliedFilters));

    ToastAndroid.show('Filters saved!', 3000);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onSwitch={value => setIsGlutenFree(value)}
      />

      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onSwitch={value => setIsLactoseFree(value)}
      />

      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onSwitch={value => setIsVegan(value)}
      />

      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onSwitch={value => setIsVegetarian(value)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Filter Meal',
    headerLeft: () => <HeaderLeftMenuBar navData={navData} />,
    headerRight: () => (
      <HeaderButtons title="Drawer" HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    marginVertical: 15
  }
});

export default FiltersScreen;
