import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import { Container, Card, CardItem, Button, Left, Right, Body, H3, Title, Icon } from "native-base";
import { NavigationActions } from 'react-navigation';
import CardSilder from 'react-native-cards-slider';
import Expo from 'expo';
import {Video} from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

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

export default class CoursesDetail extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    state = {
        mute: false,
        shouldPlay: true,
    }
        
    handlePlayAndPause = () => {  
        this.setState((prevState) => ({
            shouldPlay: !prevState.shouldPlay  
        }));
    }
      
    handleVolume = () => {
        this.setState(prevState => ({
            mute: !prevState.mute,  
        }));
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
        headerStyle: {
            backgroundColor: '#3498db',
            color: 'white',
        }
    });

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        const { width } = Dimensions.get('window');
        return (
            <ScrollView style={styles.container} >
                <View style={styles.viewHeader} >
                    <Title style={{color: 'black'}} >Title Courses</Title>
                    <Text>Descripsi about courses</Text>
                    <Text>Descripsi about courses</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}} >
                        <Left 
                            style={styles.buttonView} 
                        >
                            <Text>Rating</Text>
                        </Left>
                        <Body
                            style={styles.buttonView}
                        >
                            <Text>star</Text>
                        </Body>
                        <Right
                            style={styles.buttonView}
                        >
                            <Text>peoples enroll</Text>
                        </Right>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}} >
                        <Left 
                            style={styles.buttonView} 
                        >
                            <Text>time cours</Text>
                        </Left>
                        <Body
                            style={styles.buttonView}
                        >
                            <Text>created by</Text>
                        </Body>
                        <Right
                            style={styles.buttonView}
                        >
                            <Text>update</Text>
                        </Right>
                        <Right
                            style={styles.buttonView}
                        >
                            <Text>country</Text>
                        </Right>
                    </View>
                </View>
                <View style={styles.viewBody} >
                    <View style={styles.containerVideo}>
                        <Video
                            source={{ uri: 'https://www.youtube.com/watch?v=8-wqvf8kxmk' }}
                            shouldPlay
                            resizeMode="cover"
                            style={{ width, height: '100%' }}
                        />
                    </View>
                    <View style={styles.controlBar} >
                        <MaterialIcons 
                            name={this.state.mute ? "volume-mute" : "volume-up"}
                            size={45} 
                            color="white" 
                            onPress={this.handleVolume} 
                        />
                        <MaterialIcons 
                            name={this.state.shouldPlay ? "pause" : "play-arrow"} 
                            size={45} 
                            color="white" 
                            onPress={this.handlePlayAndPause} 
                        />
                    </View>
                </View>
                <View style={styles.viewContentBody} >
                    <View style={{flexDirection: 'row', marginTop: 0}} >
                        <H3 style={{marginRight: 50}} >IDR 200,000.00</H3>
                        <Text style={{textDecorationLine: 'line-through', textDecorationColor: 'black'}} >IDR 1,200,000.00</Text>
                    </View>
                    <Button full style={{marginTop: 10}} 
                        onPress={() => this.props.navigation.navigate('HomeEnrolCourse') }
                    >
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}} >Buy Now</Text>
                    </Button>
                    <Button full success style={{marginTop: 10}} >
                        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}} >Add to Wishlist</Text>
                    </Button>
                    <Card>
                        <CardItem header>
                            <Text>This Courses Includes</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>What Will I Learn?</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Descripsion</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Requirment</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Curriculum</Text>
                        </CardItem>
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    viewHeader: {
        width: null,
        backgroundColor: '#e6ffff',
        height: 300,
        flex: 1,
        paddingHorizontal: 10,
    },
    viewBody: {
        backgroundColor: '#C5E6FB',
        width: null,
        height: 200,
        marginHorizontal: 50,
        zIndex: 100,
        marginTop: -100,
        justifyContent: 'center',
    },
    viewContentBody: {
        paddingHorizontal: 10, 
        flex:1,
        backgroundColor: '#B8D6F3',
        width: null,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        height: '100%',
        marginTop: -100,
        paddingTop: 110,
        flexDirection: 'column'
    },
    titleHeader: {
        marginHorizontal: 10,
        color: '#fff',
    },
    titleHeaderRight: {
        marginHorizontal: 10,
        color: '#fff',
    }, 
    buttonView: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', 
        borderRadius: 50, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        height: 30,
        marginTop: 10,
    },
    containerVideo: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    }

})