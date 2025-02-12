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
  ImageBackground,
} from "react-native";


import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class WelcomeScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      isModalVisible: "false",
    };
  }

    userLogin = (emailId, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password)
          .then(() => {
            this.props.navigation.navigate("ViewInfo");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
      };

      userSignUp = (emailId, password, confirmPassword) => {
        if (password !== confirmPassword) {
          return alert("password doesn't match\nCheck your password.");
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(emailId, password)
            .then(() => {
              db.collection("users").add({
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                contact: this.state.contact,
                email_id: this.state.emailId,
                address: this.state.address,
                
              });
              return alert("User Added Successfully", "", [
                {
                  text: "OK",
                  onPress: () => this.setState({ isModalVisible: false }),
                },
              ]);
            })
            .catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              return Alert.alert(errorMessage);
            });
        }
      };

      showModal = () => {
        return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isModalVisible}
          >
            <ScrollView style={styles.scrollview}>
              <View style={styles.signupView}>
                <Text style={styles.signupText}> SIGN UP </Text>
              </View>
                  <View style={{flex:0.95}}>
                      <Text style={styles.label}>First Name </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"First Name"}
                        maxLength={12}
                        onChangeText={(text) => {
                          this.setState({
                            firstName: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}>Last Name </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Last Name"}
                        maxLength={12}
                        onChangeText={(text) => {
                          this.setState({
                            lastName: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}>Contact </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Contact"}
                        maxLength={10}
                        keyboardType={"numeric"}
                        onChangeText={(text) => {
                          this.setState({
                            contact: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}> Address </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Address"}
                        multiline={true}
                        onChangeText={(text) => {
                          this.setState({
                            address: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}>Email </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Email"}
                        keyboardType={"email-address"}
                        onChangeText={(text) => {
                          this.setState({
                            emailId: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}> Password </Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                          this.setState({
                            password: text,
                          });
                        }}
                      />
    
                      <Text style={styles.label}>Confirm Password</Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder={"Confrim Password"}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                          this.setState({
                            confirmPassword: text,
                          });
                        }}
                      />
                  </View>
    
                <View style={{flex:0.2,alignItems:'center'}}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() =>
                      this.userSignUp(
                        this.state.emailId,
                        this.state.password,
                        this.state.confirmPassword
                      )
                    }
                  >
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                  <Text
                   style={styles.cancelButtonText}
                   onPress={() => {
                     this.setState({ isModalVisible: false });
                   }}
                  >
                  Cancel
                  </Text>
                </View>
            </ScrollView>
          </Modal>
        );
      };

    render(){
        return(
          <View style={styles.bg}>
               {this.showModal()}
              <View style={{justifyContent:"center",flex:0.7}}> 
                <Image source = {require("../assets/logoo.png")} style={styles.logoImage}/>
              </View>

          <View style={{flex:0.5, justifyContent: "center", alignItems:"center"}}>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            placeholderTextColor="#014A55"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={[styles.loginBox,{marginTop:RFValue(15)}]}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="#014A55"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          </View>

            <View style={{flex:0.5,  alignItems:"center",}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userLogin('user1@gmail.com', '123456');  
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          </View>

          </View>
        )
    }
}

const styles = StyleSheet.create({
      bg: {
        flex: 1,
        backgroundColor: "#B9E1FF",
      },
    button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#014A55",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "#ffff",
        fontWeight: "bold",
        fontSize: RFValue(20),
      },
      container: {
          width: "100%",
          height: "100%",
      },
      logoImage: {
        width: "60%",
        height: "60%",
        alignSelf: "center",
      },
      loginBox: {
        width: "80%",
        height: RFValue(50),
        borderBottomWidth: 2,
        borderColor: "#3B314C",
        fontSize: RFValue(20),
        paddingLeft: RFValue(10),
        
      },
      label:{
        fontSize:RFValue(13),
        color:"#717D7E",
        fontWeight:'bold',
        paddingLeft:RFValue(10),
        marginLeft:RFValue(20)
      },
      formInput: {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:1,
        borderRadius:2,
        borderColor:"grey",
        paddingBottom:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14)
      },
      registerButton: {
        width: "75%",
        height: RFValue(50),
        marginTop:RFValue(20),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(3),
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: RFValue(10),
      },
      registerButtonText: {
        fontSize: RFValue(23),
        fontWeight: "bold",
        color: "#fff",
      },
      cancelButtonText:{
        fontSize : RFValue(20),
        fontWeight:'bold',
        color: "#32867d",
        marginTop:RFValue(10)
      },
      scrollview:{
        flex: 1,
        backgroundColor: "#fff"
      },
      signupView:{
        flex:0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    signupText:{
      fontSize:RFValue(20),
      fontWeight:"bold",
      color:"#32867d"
    },
})