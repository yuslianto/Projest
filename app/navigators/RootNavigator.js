import {
    StackNavigator
} from 'react-navigation';
import React, { Component } from 'react';
import {Text, Button, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

import Home from '../screens/Home';
import HomeMain from '../screens/HomeMain';
import HomeEnrolCourse from '../screens/HomeEnrolCourse';
import Courses from '../screens/Courses';
import enrollCourses from '../screens/enrollCourses';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import CoursesDetail from '../screens/CoursesDetail';
import ExploreCatalog from '../screens/ExploreCatalog';
import startCurriculum from '../screens/startCurriculum';
import ListCourses from '../screens/ListCourses';
import searchScreen from '../screens/searchScreen';
import DrawerApp from '../screens/DrawerApp';
import Notifications from "../Notifications/screens/Notifications";
import NotificationDetail from '../Notifications/screens/NotificationDetail';
import ProfileList from '../Profile/screens/ProfileList';
import ProfileCreate from '../Profile/screens/ProfileCreate';


const RootNavigator = StackNavigator({
    ProfileList: {
        screen: ProfileList,
        navigationOptions: {
          title: 'Profile List'
        }
    },
    ProfileCreate: {
        screen: ProfileCreate,
        navigationOptions: {
          title: 'Profile Create'
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
          title: 'Notification'
        }
    },
    NotificationDetail: {
        screen: NotificationDetail,
        navigationOptions: {
          title: 'Notification Details'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'LOGIN Or SIGN UP'
        }
    },
    HomeMain: {
        screen: HomeMain,
        navigationOptions: (props) => {
            return {
                headerLeft: <TouchableOpacity onPress={()=> props.navigation.navigate('CoursesDetail')}><Icon style={{marginHorizontal: 10, color: '#fff'}} name="menu" ></Icon></TouchableOpacity>,
                headerStyle: {backgroundColor: '#3498db', color: 'white'},
                headerRight: <TouchableOpacity onPress={()=> props.navigation.navigate('searchScreen')}><Icon style={{marginHorizontal: 10, color: '#fff'}} name="search" ></Icon></TouchableOpacity>
            }
        }
    },
    HomeEnrolCourse: {
        screen: HomeEnrolCourse,
        navigationOptions: {
            title: 'Enrol Course'
        }
    },
    startCurriculum: {
        screen: startCurriculum,
        navigationOptions: {
            title: 'Curriculum Courses'
        }
    },
    Courses: {
        screen: Courses,
        navigationOptions: {
            title: 'My Courses'
        }
    },
    enrollCourses: {
        screen: enrollCourses,
        navigationOptions: {
            title: 'Enroll Courses'
        }
    },
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    SignUp: {
        screen: SignUp, 
        navigationOptions: {
            title: 'Sign Up'
        }
    },
    CoursesDetail: {
        screen: CoursesDetail,
        navigationOptions: {
            title: 'Detail Courses'
        }
    },
    ExploreCatalog: {
        screen: ExploreCatalog,
        navigationOptions: (props) => {
            return {
                headerStyle: {backgroundColor: '#3498db', color: 'white'},
                headerRight: <TouchableOpacity onPress={()=> props.navigation.navigate('searchScreen')}><Icon style={{marginHorizontal: 10, color: '#fff'}} name="search" ></Icon></TouchableOpacity>
            }
        }
    },
    searchScreen: {
        screen: searchScreen,
        navigationOptions: {
            // title: 'search'
            header: null
        }
    },
    DrawerApp: {
        screen: DrawerApp,
        navigationOptions: {
            header: null
        }
    },

})

export default RootNavigator;