import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Text, Image, KeyboardAvoidingView, StatusBar, ScrollView } from 'react-native';
import { Container, Form, Item, Icon, Input, Button } from "native-base";
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';

import { createUsers, allUsers } from '../actions/users';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            count: 0,
            selected2: undefined,
            name: "",
            email: "",
            password: "",
            pass2: "",
        };
        this.state = { loading: true };
    }

    handleLogin() {
        return NavigationActions.reset({
            index : 0,
            actions:[
                NavigationActions.navigate({routeName: 'SignIn'})
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
        // this.props.dispatch(createUsers(this.state))
        // .then(()=>{
        //     this.props.dispatch(allUsers())
        // })
    }

    static navigationOptions = (props) => ({
        // header:  null,
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
                <View behavior="padding" style={styles.overContainer} >
                    <ScrollView>
                        <KeyboardAvoidingView style={{ flex: 1 }}
                            behavior={"padding"}>
                            <View style={styles.logoContainer} >
                                <Image 
                                    style={styles.logo}
                                    source={require('./img/favicon1.png')} 
                                />
                                <Text style={styles.title}>
                                    Screencast Pemrograman Zaman Now Rahasia Mudah Belajar Pemrograman dengan Teknologi Terkini
                                </Text>
                            </View>
                            <View style={styles.formContainer} >
                                <Form>
                                    <StatusBar
                                        barStyle="light-content"
                                    />
                                    <Item last style={styles.Item} >
                                        <Icon name="person" style={styles.icon} />
                                        <Input 
                                            placeholder="Full Name" 
                                            placeholderTextColor='#dfe6e9'
                                            returnKeyType="next"
                                            style={styles.input} 
                                            onChangeText={(name)=>this.setState({name})}
                                        />
                                    </Item>
                                    <Item last style={styles.Item} >
                                        <Icon name="mail" style={styles.icon} />
                                        <Input 
                                            placeholder="Email" 
                                            placeholderTextColor='#dfe6e9'
                                            returnKeyType="next"
                                            style={styles.input} 
                                            onChangeText={(email)=>this.setState({email})}
                                        />
                                    </Item>
                                    <Item last style={styles.Item}>
                                        <Icon name="lock" style={styles.icon} />
                                        <Input 
                                            placeholder="Password" 
                                            placeholderTextColor='#dfe6e9'
                                            returnKeyType="next" 
                                            secureTextEntry={true} 
                                            style={styles.input} 
                                            onChangeText={(password)=>this.setState({password})}
                                        />
                                    </Item>
                                    <Item last style={styles.Item}>
                                        <Icon name="lock" style={styles.icon} />
                                        <Input 
                                            placeholder="Confirm Password" 
                                            placeholderTextColor='#dfe6e9'
                                            returnKeyType="go" 
                                            secureTextEntry={true} 
                                            style={styles.input} 
                                            onChangeText={(pass2)=>this.setState({pass2})}
                                        />
                                    </Item>
                                    <Button full rounded style={styles.button} 
                                        onPress={()=> this.props.navigation.dispatch(this.handleSubmit())}
                                    >
                                        <Text style={styles.textButton} >CREATE AN ACCOUNT</Text>
                                    </Button>
                                </Form>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 0, marginBottom: 20}}>
                                <View style={styles.viewText} />
                                    <Text style={styles.textView}>or already an account</Text>
                                <View style={styles.viewText} />
                            </View>
                            <Button full rounded style={styles.button} 
                                onPress={()=> this.props.navigation.dispatch(this.handleLogin())}
                            >
                                <Text style={styles.textButton} >SIGN IN</Text>
                            </Button>
                        </KeyboardAvoidingView>
                    </ScrollView>
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
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 100,
    },
    title: {
        color: '#fff',
        marginTop: 10,
        marginBottom: 20,
        width: 240,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 15
    },
    Item: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 20,
        alignItems: 'stretch',
        // opacity: 0.4,
        borderRadius: 50,
        height: 60,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#fff',
    },
    icon: {
        padding: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        marginTop: 7,
        color: 'white'
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginBottom: 20,
        alignItems: 'stretch',
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: '#fff',

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

export default connect()(SignUp)