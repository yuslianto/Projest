import React, { Component } from 'react';
import { Text, Title, List, ListItem, Button, Body, Thumbnail, Left, Card, CardItem } from 'native-base';
import { NavigationActions } from "react-navigation";
import axios from "axios";

// Stateless component
const ProfileRow = (props)=> (
    
    <Card>
        <Title style={{color: 'black', opacity: 0.5, alignSelf: 'flex-start', marginLeft: 10, marginTop: 10}} >Highlights</Title>
        <CardItem>
            <Left>
            <Thumbnail source={require('../img/star.png')} />
            <Body>
                <Text>1 mutual connection</Text>
                <Text note>you and she both know lizna</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Left>
            <Thumbnail source={require('../img/profile.png')} />
            <Body>
                <Text>Mariam want connect with you</Text>
                <Text note>you and she both know lizna</Text>
            </Body>
            </Left>
        </CardItem>
    </Card>
)

export default ProfileRow;