import React, { Component } from 'react';
import { Text, List, ListItem, Button } from 'native-base';
import { NavigationActions } from "react-navigation";
import axios from "axios";

// Stateless component
const NotificationItem = (props)=> (
    <ListItem
        key={props.item.objectId}
        onPress={(item)=> props.navigation.navigate('NotificationDetail',{item: props.item})}
    >
        <Text>{props.item.title}</Text> 
    </ListItem>
)

export default NotificationItem;