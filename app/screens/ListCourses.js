import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, FlatList } from 'react-native';
import { Icon, Left, Body, Right, CardItem, Thumbnail, Button, Card } from "native-base";
import { NavigationActions } from 'react-navigation';
import StarRating from 'react-native-star-rating';

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

class ListCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5
        };
    }
    
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    _renderItem(item){
        return(
            <View style={{marginLeft: 10}}>
                <Card transparent 
                    style={{borderColor: '#bfbfbf', borderBottomWidth: 2, borderRadius: 10, borderEndWidth: 2, borderTopEndRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} 
                >
                    <View style={{flexDirection: 'column'}} >
                        <Image style={{width: '100%', height: 100, flex: 1}} source={require('./img/laravel.png')} />
                        <Text style={{marginHorizontal: 10}} >{item.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10}} >
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
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
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
            <ScrollView style={styles.container} >
                <View>
                    <Text style={styles.title} >PHP Courses</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent= {()=> <View style={{width: 10}} />}
                        renderItem={({item}) => this._renderItem(item)}
                        data = {shows_first}
                        />
                </View>
                <View>
                    <Text style={styles.title} >Python Courses</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent= {()=> <View style={{width: 5}} />}
                        renderItem={({item}) => this._renderItem(item)}
                        data = {shows_first}
                    />
                </View>
                <View>
                    <Text style={styles.title} >Mobile Courses</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent= {()=> <View style={{width: 5}} />}
                        renderItem={({item}) => this._renderItem(item)}
                        data = {shows_first}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6f3ff',
        padding: 10,
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

export default ListCourses;