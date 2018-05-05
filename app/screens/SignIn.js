import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text, Image, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Container, Form, Item, Icon, Input, Button } from "native-base";
import { NavigationActions } from 'react-navigation';

export default class SignIn extends Component {
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
                NavigationActions.navigate({routeName: 'DrawerApp'})
            ]
        });
    }

    static navigationOptions = (props) => ({
        // header:  null
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#3498db',
            color: 'white',
        }
    });

    render() {
        return (
            <ImageBackground
                source={require('./img/fire.jpg')}
                style={styles.container}
            >
                <View style={styles.overContainer} >
                    <View style={styles.logoContainer} >
                        <Image 
                            style={styles.logo}
                            source={require('./img/favicon1.png')} 
                        />
                        <Text style={styles.title}>
                            Screencast Pemrograman Zaman Now Rahasia Mudah Belajar Pemrograman dengan Teknologi Terkini
                        </Text>
                    </View>
                    <KeyboardAvoidingView behavior="padding" style={styles.formContainer} >
                        <Form>
                            <StatusBar
                                barStyle="light-content"
                            />
                            <Item last style={styles.Item} >
                                <Icon name="person" style={styles.icon} />
                                <Input 
                                    placeholder="Username or Email" 
                                    placeholderTextColor='#dfe6e9'
                                    returnKeyType="next"
                                    style={styles.input} 
                                />
                            </Item>
                            <Item last style={styles.Item}>
                                <Icon name="lock" style={styles.icon} />
                                <Input 
                                    placeholder="Password" 
                                    placeholderTextColor='#dfe6e9'
                                    returnKeyType="go" 
                                    secureTextEntry={true} 
                                    style={styles.input} 
                                />
                            </Item>
                            <Button full rounded style={styles.button} 
                                onPress={()=> this.props.navigation.dispatch(this.handleSubmit())}
                            >
                                <Text style={styles.textButton} >LOGIN</Text>
                            </Button>
                        </Form>
                    </KeyboardAvoidingView>
                    <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 20}}>
                        <View style={styles.viewText} />
                            <Text style={styles.textView}>or you can</Text>
                        <View style={styles.viewText} />
                    </View>
                    <Button full rounded style={styles.button} 
                        onPress={()=> this.props.navigation.dispatch(this.handleLogin())}
                    >
                        <Text style={styles.textButton} >CREATE AN ACCOUNT</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    overContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 0,
        opacity: 0.8
    },
    logoContainer: {
        alignItems: 'center',
        flex: 1,
        // justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        width: 240,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 15
    },
    Item: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        alignItems: 'stretch',
        borderRadius: 50,
        height: 60,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderWidth: 2,
    },
    icon: {
        padding: 20,
        color: '#fff'
    },
    input: {
        marginTop: 7,
        color: 'white',
        opacity: 5,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginBottom: 20,
        alignItems: 'stretch',
        width: '100%',
        height: 60,
        borderColor: '#fff',
        borderWidth: 1,
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    textView: {
        alignSelf:'center',
        paddingHorizontal:5, 
        fontSize: 15,
        color: '#fff'
    },
    viewText: {
        backgroundColor: '#fff', 
        height: 1, 
        flex: 1, 
        alignSelf: 'center'
    }
});