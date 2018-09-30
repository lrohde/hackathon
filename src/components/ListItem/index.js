import React, { Component, Fragment } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ListAvatarExample extends Component {



  render() {
    const { name, epi, status } = this.props;
    return (
      <Fragment>
        <List style={{backgroundColor: status != 1 ? '#ffcdd2' : '#fff' }}>
          <ListItem avatar>
            <Left>
              {
                status != 1
                ? <Icon name='md-alert' style={{fontSize: 30, color: '#d50000'}}/>
                : <Icon name='md-checkmark' style={{fontSize: 30, color: '#2e7d32'}}/>
              }


            </Left>
            <Body>
              <Text>{name}</Text>
              <Text note style={{color: status != 1 ? '#000' : '#727272' }}>{epi}</Text>
            </Body>
            <Right>
              <Text note>3:43 pm</Text>
            </Right>
          </ListItem>
        </List>
      </Fragment>
    );
  }
}
