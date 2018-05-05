import React, {Component} from 'react';
import { TextInput, View, KeyboardAvoidingView } from 'react-native';
import {Container, Content, Text, Title, Form, Item, Input,
  Header, Body, List, Icon, Card, CardItem, Label,
  ListItem, Left, Button, Right, 
} from 'native-base';
import { connect } from 'react-redux';
import Expo from 'expo';
import {FlatList, StyleSheet} from 'react-native';

import { createPayment, allPayment } from '../actions/payment';

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

class HomeEnrolCourse extends Component {

    constructor(){
        super();
        this.state = {
            count: 0,
            selected2: undefined,
            CardNumber: "",
            ExpDate: "",
            CvcCode: "",
            Country: "",
            PostalCode: ""
        };
        this.state = { loading: true };
    }

    static navigationOptions = (props) => ({
        headerTintColor: '#fff',
        // headerTitle: <HeaderTitle/>,
        // headerRight: <HeaderRight/>,
        headerStyle: {
            backgroundColor: '#3498db',
            color: 'white',
        }
    });

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ loading: false });
    }

    handleSubmit(){
        this.props.dispatch(createPayment(this.state))
        .then(()=>{
            this.props.dispatch(allPayment())
            this.props.navigation.navigate('startCurriculum')
        })
    }

    render(){
        if (this.state.loading) {
            return <Expo.AppLoading />
        }
        return (
            <Container>
                <Content style={{ backgroundColor: '#e6f3ff', height: '100%' }}>
                    <Card style={{flex: 0, marginLeft: 10, marginRight:10}}>
                        <CardItem header style={{backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold'}} >Order Summary</Text>
                        </CardItem>
                        <CardItem>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text>Image Courses</Text>
                            </View>
                            <Right style={{justifyConten: 'flex-start', alignItems: 'flex-start'}}>
                                <Text>Harga :</Text>
                                <Text>Rp 200.000,00</Text>
                            </Right>
                        </CardItem>
                        <CardItem style={{justifyConten: 'space-between', alignItems: 'space-between'}}>
                            <Left>
                                <View style={{justifyConten: 'flex-start', alignItems: 'flex-start'}}>
                                    <Button transparent textStyle={{color: '#87838B', padding: 5}}>
                                        <Text>Add Cupon</Text>
                                    </Button>
                                </View>
                                <Right style={{justifyConten: 'flex-end', alignItems: 'flex-end'}}>
                                    <TextInput style={{width: 150}}/>
                                </Right>
                            </Left>
                        </CardItem>
                        <CardItem style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text>Total Harga :</Text>
                                <Text>Rp 200.000,00</Text>
                            </View>
                            <Right style={{justifyConten: 'flex-start', alignItems: 'flex-start'}}>
                                <Text>Harga :</Text>
                                <Text>Rp 200.000,00</Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginLeft: 10, marginRight:10}}>
                        <CardItem header style={{backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold'}}>Account Information</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Icon name="mail" />
                                <Text>Akun Email</Text>
                            </Left>
                            <Right>
                                <Button transparent textStyle={{color: '#87838B'}}>
                                <Text>Log Out</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginLeft: 10, marginRight:10}}>
                        <CardItem header style={{backgroundColor: '#f2f2f2', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold'}}>Payment Information</Text>
                        </CardItem>
                        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                        <Form style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}} >
                            <Item floatingLabel>
                                <Label>Card Number</Label>
                                <Input onChangeText={(CardNumber)=>this.setState({CardNumber})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Expiration Date</Label>
                                <Input onChangeText={(ExpDate)=>this.setState({ExpDate})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>CVC Code</Label>
                                <Input onChangeText={(CvcCode)=>this.setState({CvcCode})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Postal Code</Label>
                                <Input onChangeText={(PostalCode)=>this.setState({PostalCode})}/>
                            </Item>
                            <Item floatingLabel>
                                <Label>Country</Label>
                                <Input onChangeText={(Country)=>this.setState({Country})}/>
                            </Item>
                        </Form>
                        </KeyboardAvoidingView>
                        <Button rounded full textStyle={{color: '#87838B'}}
                            onPress={()=> this.handleSubmit()}
                            // onPress={() => this.props.navigation.navigate('startCurriculum')}
                            style={{marginHorizontal: 10, marginVertical: 10}}
                        >
                            <Icon name="add" />
                            <Text>Enrol In Course</Text>
                        </Button>
                        
                    </Card>
                </Content>
            </Container>
        );
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
})

export default connect()(HomeEnrolCourse);