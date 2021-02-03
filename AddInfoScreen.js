import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";


import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from '../components/MyHeader';

export default class AddInfoScreen extends React.Component{



    render(){
        return(
          <View style={{alignItems:"center",}}> 
          <MyHeader title="Add Info" navigation ={this.props.navigation}/>

<View style={{margin: 20}}>
  <TouchableOpacity style={styles.button}>
  <Icon name='address-book' type='font-awesome' color='#696969' size={35}/>
    <Text style={styles.buttonText}>Add Contacts</Text>
    <Icon name='plus' type='font-awesome' color='#696969' size={35} onPress={this.props.navigation.navigate("Contacts")}/>
  </TouchableOpacity>
</View>

<View style={{margin: 20}}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Add Events</Text>
  </TouchableOpacity>
</View>

<View style={{margin: 20}}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Add Reminder</Text>
  </TouchableOpacity>
</View>

<View style={{margin: 20}}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Add Notes</Text>
  </TouchableOpacity>
</View>

<View style={{margin: 20}}>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Add Task</Text>
  </TouchableOpacity>
</View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        //width: "90%",
        height: RFValue(50),
        //justifyContent: "center",
        //alignItems: "center",
        borderRadius: RFValue(5),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
        flexDirection: 'row'
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20),
        marginHorizontal: 10
      }
})