import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteStory extends React.Component {
   constructor() {
    super();
     this.state = {
            title: '',
            author: '',
            storyText: '',
        }
  
  }
    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            date: firebase.firestore.Timestamp.now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
     ToastAndroid.show("Story Submited", ToastAndroid.SHORT)
    }
   render(){
  return (
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

     <Header
          backgroundColor={'red'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white', fontSize: 20 },
          }}
        />
         <TextInput
           multiline={true}
         placeholder="Title"
          style={styles.inputBox}

        />
         <TextInput
           multiline={true}
         placeholder="Author"
          style={styles.inputBox}
        
        />
         <TextInput
         multiline={true}
         placeholder="Write Story"
          style={styles.inputBox2}
         
        />
           <TouchableOpacity
           onPress={this.submitStory}
          style={styles.goButton}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
 </KeyboardAvoidingView>
  )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor: "yellow"
  },
inputBox2: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 160,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
        backgroundColor: "yellow"
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    borderRadius: 50
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

