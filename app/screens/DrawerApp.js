import React, { Component } from 'react';
import { Text, View, Button, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {Icon} from 'native-base';

import HomeMain from './HomeMain';
import myCoursesScreen from './myCoursesScreen';
import myWishlist from './myWishlist';
import searchScreen from './searchScreen';

const DrawerApp = DrawerNavigator({
    HomeMain: {
        screen: HomeMain,
    },
    myCoursesScreen: {
       screen: myCoursesScreen,
    },
    myWishlist: {
        screen: myWishlist,
    },
    searchScreen: {
        screen: searchScreen,
    }
});

export default DrawerApp;