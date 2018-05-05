import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, TextInput, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Icon, Title, Button, Card, Header } from "native-base";
import { NavigationActions } from 'react-navigation';
import Expo from 'expo';
import Carousel from 'react-native-banner-carousel';

import ListCourses from './ListCourses';

const BannerHeight = 200;
const BannerWidth = Dimensions.get('window').width;
const images = [
    "https://i.pinimg.com/564x/a3/28/a0/a328a0917781210e4c5c4460f0d33530.jpg",
    "https://i.pinimg.com/564x/9b/b4/9e/9bb49e9c16292dae0c809e3b3ac1b367.jpg",
    "https://i.pinimg.com/564x/1a/ea/6e/1aea6e795cc19a7f0daee3f045653d4c.jpg",
    "https://i.pinimg.com/564x/41/52/4c/41524c4fe3d64811d377a2817f705d2f.jpg",
];

export default class HomeMain extends Component {
    static navigationOptions = {
        drawerLabel: 'Full Catalog',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./img/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    renderPage(image, index) {
        return(
            <View key={index} >
                <Image style={{ width: BannerWidth, height: BannerHeight}} 
                    source={{uri: image}}
                />
            </View>
        )
    }

    render() {
        return (
            <Container>
                <Header style={{height: 80, backgroundColor: '#3498db', color: 'white'}}>
                    <View 
                        style={{flex:1, flexDirection: 'row', paddingTop: 5, marginTop: 20, justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 }}
                    >
                        <View>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('DrawerOpen')}>
                                <Icon style={{marginHorizontal: 10, color: '#fff'}} name="menu" ></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal: 10, paddingHorizontal: 10}} >
                            <TextInput  
                                placeholder= 'Search Courses ' placeholderTextColor='white' Color='white'
                                style= {{ width: 300, color: 'white', padding : 10, fontSize: 17}} 
                            />
                        </View>
                        <View>
                            <Button transparent
                                onPress={()=> this.props.navigation.navigate('searchScreen')}
                            >
                                <Icon name='search' />
                            </Button>
                        </View>
                    </View>
                </Header>
                <ScrollView style={{flex:0,  backgroundColor: '#e6f3ff'}} >
                    <View style={{width: '100%', height: 200, flex: 1}} >
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            index={0}
                            pageSize={BannerWidth}
                        >
                            {images.map((image, index) => this.renderPage(image, index))}
                        </Carousel>
                    </View>
                    <View style={{flex:9}} >
                        <ListCourses navigation ={ this.props.navigation} />
                    </View>
                    <View style={{marginBottom: 10, padding: 10, flex:1, backgroundColor: '#e6f3ff'}} >
                        <Button full 
                            onPress={() => this.props.navigation.navigate('ExploreCatalog') }
                        >
                            <Text style={{fontWeight: 'bold', color: '#fff'}} >EXPLORE FULL CATALOG</Text> 
                        </Button>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        height: '50%', 
        width: '100%'
    },
    titleHeader: {
        marginHorizontal: 10,
        color: '#fff'
    },
    titleHeaderRight: {
        marginHorizontal: 10,
        color: '#fff'
    },
    viewImageStyle: {
        height: '100%', 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: '#3498db'
    },
    icon: {
        width: 24,
        height: 24,
    },
});