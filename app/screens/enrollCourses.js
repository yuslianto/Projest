import React, {Component} from 'react';
import {Container, Content, Text, Form, Item, Input,
  Body, Icon, Label, ListItem, Button
} from 'native-base';
import {connect} from 'react-redux';
// import Expo from 'expo';

import { createPayment, allPayment } from '../actions/payment';

class enrollCourses extends Component {

  state = {
    CardNumber: "",
    ExpDate: "",
    CvcCode: "",
    Country: "",
    PostalCode: ""
  }

  handleSubmit(){
    this.props.dispatch(createPayment(this.state))
    .then(()=>{
      this.props.dispatch(allPayment())
      this.props.navigation.goBack()
    })
  }

  render(){
    // console.log(this.props);
    return (
      <Container>
        <Content style={{ backgroundColor: '#edf7f2', height: '100%' }}>
          <Form>
              <Item floatingLabel>
                  <Label>Card Number</Label>
                  <Input onChangeText={(CardNumber)=>this.setState({CardNumber})}/>
              </Item>
              <Item floatingLabel last>
                  <Label>Expiration Date</Label>
                  <Input onChangeText={(ExpDate)=>this.setState({ExpDate})}/>
              </Item>
              <Item floatingLabel last>
                  <Label>CVC Code</Label>
                  <Input onChangeText={(CvcCode)=>this.setState({CvcCode})}/>
              </Item>
              <Item floatingLabel last>
                  <Label>Country</Label>
                  <Input onChangeText={(Country)=>this.setState({Country})}/>
              </Item>
          </Form>
        </Content>
        <Button full bordered transparent rounded onPress={()=> this.handleSubmit()} textStyle={{color: '#87838B'}}>
            <Text>Submit</Text>
        </Button>
      </Container>
    );
  }
}

export default connect()(enrollCourses);