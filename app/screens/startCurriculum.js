import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, Text } from 'react-native';
import { Container, Card, CardItem, Button, Left, Right, Body, Title, Icon } from "native-base";
import { NavigationActions } from 'react-navigation';
// import Video from 'react-native-video';
import CardSilder from 'react-native-cards-slider';
import Expo from 'expo';

class HeaderTitle extends Component{
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
      }
    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (
            <Button transparent 
                onPress={() => this.props.navigation.navigate('HomeMain') }
            >
                <Icon style={styles.titleHeader} name="arrow-back" />
            </Button>
        )
    }
}

class HeaderRight extends Component{
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
      }
    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (
            <Button transparent style={styles.buttonHeaderRight}>
                <Icon style={styles.titleHeaderRight} name="heart" />
            </Button>
        )
    }
}

export default class startCurriculum extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
      }

    static navigationOptions = (props) => ({
        headerTintColor: '#fff',
        // headerTitle: <HeaderTitle/>,
        headerRight: <HeaderRight/>,
        // header: null,
        headerStyle: {
            backgroundColor: '#3498db',
            color: 'white',
        }
    });

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (
            <View style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '100%', width: null}} >
                <View style={{backgroundColor: '#74b9ff', height: '30%', width: null}} >
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}} >
                        <Title style={{color: '#fff', margin: 10}} >Lecture 1</Title>
                        <Title>Title Curriculum Courses</Title>
                        <Body>
                            <Button rounded danger style={{paddingHorizontal: 10, marginTop: 50}} >
                                <Text style={{color: '#fff'}} >Get Started</Text>
                            </Button>
                        </Body>
                    </View>
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', height: '70%', width: null}} >
                    <ScrollView>
                        <Card>
                            <CardItem header style={{flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start'}} >
                                <Text>Title The Courses</Text>
                                <Text note>author</Text>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header style={{flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start'}} >
                                <Text>Section 1 -  Introductions</Text>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:15}}>
                                        <Text>1</Text>
                                    </View>
                                    <View>
                                        <Text>Introduction</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:15}}>
                                        <Text>2</Text>
                                    </View>
                                    <View>
                                        <Text>Introduction Ract</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem header style={{flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start'}} >
                                <Text>Section 2 -  Installing</Text>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:15}}>
                                        <Text>1</Text>
                                    </View>
                                    <View>
                                        <Text>Installing</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:15}}>
                                        <Text>2</Text>
                                    </View>
                                    <View>
                                        <Text>Installing NPM</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <CardItem header style={{flexDirection: 'column', justifyContent:'flex-start', alignItems: 'flex-start'}} >
                                <Text>Section 3 -  Installing</Text>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:15}}>
                                        <Text>1</Text>
                                    </View>
                                    <View>
                                        <Text>Installing</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', paddingHorizontal: 15}} >
                                    <View style={{marginRight:12}}>
                                        <Text>2</Text>
                                    </View>
                                    <View>
                                        <Text>Installing NPM</Text>
                                        <Text style={{fontSize:12}}>video duration</Text>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    titleHeader: {
        marginHorizontal: 10,
        color: '#fff'
    },
    titleHeaderRight: {
        marginHorizontal: 10,
        color: '#fff'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})