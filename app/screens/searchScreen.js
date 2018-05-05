import React, { Component } from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';
import { Container, Header, Button, Icon, Text } from 'native-base';
import Expo from 'expo';
import {NavigationActions} from 'react-navigation';

export default class searchScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Search Catalog',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./img/search.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

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
            <Container>
                <Header style={{height: 80, backgroundColor: '#3498db', color: 'white'}}>
                    <View 
                        style={{flex:1, flexDirection: 'row', paddingTop: 5, marginTop: 20, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 }}
                    >
                        <View>
                            <Button transparent
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <Icon name='arrow-back' />
                            </Button>
                        </View>
                        <View style={{marginHorizontal: 10, paddingHorizontal: 10}} >
                            <TextInput  
                                placeholder= 'Search Catalog' placeholderTextColor='white' Color='white'
                                style= {{ width: 300, color: 'white', padding : 10, fontSize: 17}} 
                            />
                        </View>
                        <View>
                            <Button transparent>
                                <Icon name='search' />
                            </Button>
                        </View>
                    </View>
                </Header>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});