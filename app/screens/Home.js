import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text, Image, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Container, Form, Item, Icon, Input, Button } from "native-base";
import { NavigationActions } from 'react-navigation';
import Carousel from 'react-native-banner-carousel';

const BannerHeight = Dimensions.get('window').height;
const BannerWidth = Dimensions.get('window').width;
const images = [
    "https://i.pinimg.com/564x/a3/28/a0/a328a0917781210e4c5c4460f0d33530.jpg",
    "https://i.pinimg.com/564x/68/f6/19/68f619e8bf8e96d4db6b19d7cab1c813.jpg",
    "https://i.pinimg.com/564x/1a/ea/6e/1aea6e795cc19a7f0daee3f045653d4c.jpg",
];

export default class SignIn extends Component {
    renderPage(image, index) {
        return(
            <View key={index} >
                <Image style={{ width: BannerWidth, height: BannerHeight}} 
                    source={{uri: image}}
                />
            </View>
        )
    }

    handleLogin() {
        return NavigationActions.reset({
            index : 0,
            actions:[
                NavigationActions.navigate({routeName: 'SignUp'})
            ]
        });
    }

    handleSubmit() {
        return NavigationActions.reset({
            index : 0,
            actions:[
                NavigationActions.navigate({routeName: 'SignIn'})
            ]
        });
    }

    static navigationOptions = (props) => ({
        header:  null
    });

    render() {
        return (
            <ImageBackground
                source={require('./img/fire.jpg')}
                style={styles.container}
            >
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    <View style={styles.logoContainer} >
                        <Image 
                            style={styles.logo}
                            source={require('./img/favicon1.png')} 
                        />
                        <Text style={styles.title}>
                            Screencast Pemrograman Zaman Now Rahasia Mudah Belajar Pemrograman dengan Teknologi Terkini
                        </Text>
                    </View>
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
                <View style={styles.overContainer} >
                    <View style={styles.viewButtom}>
                        <View style={styles.viewButtom}>
                            <Button full danger bordered style={styles.button} 
                                onPress={() => this.props.navigation.navigate('SignIn') }
                            >
                                <Text style={styles.textButton} >ALREADY AN ACCOUNT</Text>
                            </Button>
                        </View>
                        <View style={styles.viewButtom}>
                            <Button full danger bordered style={styles.button} 
                                onPress={() => this.props.navigation.navigate('SignUp') }
                            >
                                <Text style={styles.textButton} >CREATE AN ACCOUNT</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    overContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        // zIndex: 400,
        marginTop: -410,
    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 300,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        padding: 20,
        color: '#fff'
    },

    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'stretch',
        opacity: 1,
        width: 200,
        height: 70
    },
    textButton: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    viewButtom: {
        flexDirection: 'row', 
        marginTop: 0, 
        marginBottom: 0, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-end',
        marginLeft: 0,
        marginRight: 0
    },
    viewImageStyle: {
        height: '100%', 
        width: '100%',
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: '#3498db'
    },
    imageStyle:{
        height: '100%', 
        width: '100%'
    },
});