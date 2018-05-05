import React, {Component} from 'react'
import { View } from 'react-native'
import {
  Container, Content, List, Body, Button, Spinner,
  ListItem, Text, Fab, Icon, Left, Right, SwipeRow
} from 'native-base'
import {connect} from 'react-redux'

import {allPayment} from '../actions/payment'

class Courses extends Component{

  componentWillMount(){
    // store.dispatch
    // this.props.dispatch({type: 'ALL_COURSES', payload: []})
    this.props.dispatch(allPayment())
  }

  componentDidMount(){
    // this.props.allCourses();
    // console.log(this.props.coursesReducer);
  }

  render(){
      return (
          <Container>
              <Content>
                {this.props.paymentReducer.isLoading? (
                  <Spinner/>
                ): (
                  <List>
                    {this.props.paymentReducer.courses.map((course)=>(
                      <ListItem key={course.id} style={{flexDirection: 'column', flex: 1}} >
                        <Text>{course.CardNumber}</Text>
                        <Text>{course.ExpDate}</Text>
                        <Text>{course.CvcCode}</Text>
                        <Text>{course.Country}</Text>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Content>
              <Fab
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={()=> this.props.navigation.navigate('enrollCourses')}
              >
                <Icon name="add" />
              </Fab>
            </Container>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    paymentReducer: state.paymentReducer
  }
}

export default connect(mapStateToProps)(Courses)