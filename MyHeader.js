import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';

export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: '',
    }
  }
  componentDidMount(){
   // this.getNumberOfUnreadNotifications()
  }

  getNumberOfUnreadNotifications(){
    db.collection('all_notifications').where('notification_status','==','unread').onSnapshot((snap)=>{
      var unreadNotifications = snap.docs.map((doc)=>{ doc.data()  })
      this.setState({value:unreadNotifications.length})
    })
  }
  
  BellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='#696969' size={25}
          //onPress={() =>this.props.navigation.navigate('Notification')}
          />
         <Badge
         value={this.state.value}
         containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
      </View>
    )
  }

  render(){
    return(
      <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: this.props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
      rightComponent={<this.BellIconWithBadge {...this.props}/>}
      backgroundColor = "#014A55"
    />
    )
  }
}


