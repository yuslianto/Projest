import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Icon, Left, Body, Right, CardItem, Thumbnail, Button, Card } from "native-base";
import StarRating from 'react-native-star-rating';
import { NavigationActions } from 'react-navigation';
import Carousel from 'react-native-banner-carousel';

const BannerHeight = 200;
const BannerWidth = Dimensions.get('window').width;
const shows_first = [
    {
        key: 1,
        name: 'someone',
        imageUrl: "https://i.pinimg.com/564x/49/6b/ce/496bce53f21f27fee4d88e7f8c0c4e05.jpg",
        title: "something",
        harga: "Rp 200.000,00"
    },
    {
        key: 2,
        name: 'someone',
        imageUrl: "http://makeitopen.com/images/Development_Environment.svg",
        title: "something two",
        harga: "Rp 200.000,00"
    },
    {
        key: 3,
        name: 'someone',
        imageUrl: "http://makeitopen.com/images/Data_Flow.svg",
        title: "something three",
        harga: "Rp 200.000,00"
    },
    {
        key: 4,
        name: 'someone',
        imageUrl: "https://3.bp.blogspot.com/-qLSLEbGy8lA/WdXp8aDJznI/AAAAAAAABh4/Fdvq8ugcBBY0t5U0kiz_76166sDHcou4gCLcBGAs/s1600/React%2BNative%2BBuild%2BYour%2BOwn%2BMobile%2BApps.jpg",
        title: "something four",
        harga: "Rp 200.000,00"
    },
];
const images = [
    "https://i.pinimg.com/564x/a3/28/a0/a328a0917781210e4c5c4460f0d33530.jpg",
    "https://i.pinimg.com/564x/9b/b4/9e/9bb49e9c16292dae0c809e3b3ac1b367.jpg",
    "https://i.pinimg.com/564x/1a/ea/6e/1aea6e795cc19a7f0daee3f045653d4c.jpg",
    "https://i.pinimg.com/564x/41/52/4c/41524c4fe3d64811d377a2817f705d2f.jpg",
];

export default class myCoursesScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Wishlist',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./img/favorite.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            starCount: 4
        };
    }
    
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    _renderItem(item){
        return(
            <View style={{marginHorizontal: 10, marginBottom: 5}}>
                <Card transparent 
                    style={{borderColor: '#bfbfbf', borderBottomWidth: 2, borderRadius: 10, borderEndWidth: 2, borderTopEndRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} 
                >
                    <View style={{flexDirection: 'column'}} >
                        <Image style={{width: '100%', height: 200, flex: 1}} source={require('./img/picture.png')} />
                        <Text style={{marginHorizontal: 10}} >{item.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingLeft: 10}} >
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            starSize={20}
                            fullStarColor={'#ffcc00'}
                        />
                        <Text style={{marginHorizontal: 10, fontSize: 10}} >(1,2456)</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'space-between'}} >
                        <Text style={{marginHorizontal: 10, fontSize: 15}} >{item.harga}</Text>
                        <Text style={{marginHorizontal: 10, fontSize: 10, textDecorationLine: 'line-through', textDecorationColor: 'black'}} >{item.harga}</Text>
                    </View>
                    <View style={{alignSelf: 'center', marginTop: 5, marginBottom: 5}} >
                        <Button small success rounded bordered 
                            onPress={()=> this.props.navigation.navigate('CoursesDetail')}
                        >
                            <Text style={{marginHorizontal: 10}} >Enroll Courses</Text>
                        </Button>
                    </View>
                </Card>
            </View>
        );
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
                <ScrollView style={styles.container} >
                    <View style={{marginBottom: 10}} >
                        <Text style={styles.title} >Wishlist</Text>
                        <FlatList
                            vertical
                            SeparatorComponent= {()=> <View style={{width: 10}} />}
                            renderItem={({item}) => this._renderItem(item)}
                            data = {shows_first}
                            />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#e6f3ff',
        padding: 0,
        opacity: 0.9,
        height: '100%',
        width: '100%'
    },
    title: {
        color: 'black',
        fontSize: 20,
        padding: 10
    }
});