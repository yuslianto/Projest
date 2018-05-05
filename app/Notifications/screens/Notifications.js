import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';
import axios from "axios";
import { NavigationActions } from "react-navigation";

import NotificationItem from '../components/NotificationItem'

export default class Notification extends Component {
    state = { 
        notification: []
    }
    componentDidMount(){
        let url= 'https://api.backendless.com/34C6DE32-294B-A115-FF02-CB849A7D9C00/90304B5E-2F83-8CA6-FFB5-770108CE2F00/data/notification'
        url += '?sortByCreated'
        axios.get(url).then((res)=>{
            this.setState({
                notification: res.data
            })
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {this.state.notification.map((item)=>(
                            <NotificationItem item={item} {...this.props} key={item.objectId}/>  
                        ))}
                    </List>              
                </Content>
            </Container>
            
        );
    }
}