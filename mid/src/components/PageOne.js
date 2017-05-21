import React, { Component } from 'react';
import { ScrollView, Animated, Dimensions, PanResponder, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import albums from '../json/albums.json';
import Ani from './Ani';

const { width, height } = Dimensions.get('window');
const albumsWidth = 60;

// Make a component
class PageOne extends Component {

  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }
  
  
  

  render() {
    const {position } = this.state;
    return (
      <ScrollView style={{backgroundColor:'#ffffff'}}>
        <List style={ {width:'100%' }}>
          {this.state.albums.map((album) => (
           <Ani
             album={{...album}}
             nav={this.props.navigation}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default PageOne;