import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import axios from 'axios'; 
import { NavigationActions } from "react-navigation";

export default class ProfileCreate extends Component {
    render() {
    const {title, deskripsion} = this.props.navigation.state.params.item
        return (
            <Container>
                <Container>
                    <List style= {{flex: 1}} >
                        <ListItem style={{flex: 1, flexDirection: 'row',}} >
                            <Text>{ title } </Text>
                        </ListItem>
                        <ListItem style={{flex: 1, flexDirection: 'row',}} >
                            <Text>{ deskripsion }</Text>
                        </ListItem>
                    </List>
                </Container>
            </Container>
        );
    }
}