import React from 'react';
import CustomHeaderButton from './HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const HeaderLeftMenuBar = props => {
  return (
    <HeaderButtons title="Drawer" HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => props.navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  );
};

export default HeaderLeftMenuBar;
