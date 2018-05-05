import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native'
import { Container, Content, Text, List, ListItem, Card, CardItem, Left, Body, Thumbnail, Button, Title, Icon } from 'native-base';
import axios from "axios";
import { NavigationActions } from "react-navigation";

import ProfileRow from '../components/ProfileRow'

export default class ProfileList extends Component {
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
    state = { 
        profiles: []
    }
    componentDidMount(){
        let url= 'https://api.backendless.com/34C6DE32-294B-A115-FF02-CB849A7D9C00/90304B5E-2F83-8CA6-FFB5-770108CE2F00/data/Profiles'
        url += '?sortByCreated'
        axios.get(url).then((res)=>{
            this.setState({
                profiles: res.data
            })
        })
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (
            <ImageBackground
                source={require('../img/react.jpg')}
                style={styles.imageBackground}
            >
                <Content style={styles.content} >
                    <Image 
                        source={require('../img/picture.png')}
                        style={styles.viewBody} 
                    />
                    <View style={styles.viewContentProfile} >
                        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Title style={{color: 'black'}}>Yuslianto</Title>
                            <View 
                                style={{flex:1, flexDirection: 'column', alignItems: 'center', justufyContent: 'center', width: 350, paddingHorizontal: 20}}
                            >
                                <Text style={{textAlign: 'center'}}>Director of Project Manager at GoldenDown Universal </Text>
                                <Text style={{textAlign: 'center', opacity: 0.3, marginTop: 10}}>Universitas Pamulang - Tangerang</Text>
                                <View style={{flex:1, flexDirection: 'row'}}>
                                    <Text style={{textAlign: 'center', opacity: 0.3, marginTop: 5}}>Student Unpam 500</Text>
                                    <Icon style={{height: 20, width: 20, opacity: 0.3, marginTop: 5 }} name="person"/>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                                <Button transparent bordered style={{marginTop: 10}} 
                                    onPress={() => this.props.navigation.navigate('HomeEnrolCourse') }
                                >
                                    <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 15}} >MESSAGE</Text>
                                </Button>
                                <Button success style={{marginTop: 10}} >
                                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}} >CONNECT</Text>
                                </Button>
                            </View>
                            <View 
                                style={{flex:1, flexDirection: 'row', marginTop: 10, alignItems: 'center', justufyContent: 'center', width: 350, paddingHorizontal: 10, marginHorizontal: 10}}
                            >
                                <Text style={{textAlign: 'center'}}>I'm a renewable energiy executive with 1 years of junior, and have strong skill in react native </Text>
                            </View>
                        </View>
                    </View> 
                    <View>
                        <ProfileRow />
                    </View>
                </Content>
            </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    Profile: {
        flex: 1,
        width: null,
        height: 200,
        marginTop: -50
    },
    content: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 10
    },
    viewBody: {
        width: 200,
        height: 200,
        marginHorizontal: 50,
        zIndex: 100,
        marginTop: 50,
        justifyContent: 'center',
        borderRadius: 200,
        alignSelf: 'center'
    },
    viewContentProfile: {
        paddingHorizontal: 10, 
        flex:1,
        marginHorizontal: 2,
        backgroundColor: 'white',
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: -100,
        paddingTop: 110,
        flexDirection: 'row',
        paddingBottom: 10
    },

});