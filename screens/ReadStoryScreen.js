import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import {SearchBar, Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStories: [],
      search: "",
      dataSource: []
    };
  }
  retriveStories = async () => {
    const query = await db.collection("stories").get();
    query.docs.map((doc) => {
      this.setState({ allStories: [...this.state.allStories, doc.data()] });
    });
  };
  componentDidMount=()=>{
    this.retriveStories();
  }
  SearchFilterFunction = async (searchtext) => {
      var text = searchtext.split();
      const searched = await db.collection("stories").where('title', '==', searchtext).get()
     searched.docs.map((doc)=>{
        this.setState({
         dataSource: doc,
         search: searchtext
        })
      })
    }
  render() {
    return (
      <View style={styles.container}>

     <SearchBar
                    placeholder="Search story with story name....."
                    onChangeText={(text)=>{this.SearchFilterFunction(text)}}
                    value={this.state.search}
                />
   
<View>
        
          <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>(
            <View style={{borderBottomWidth: 2}}>
                <Text>{"By: " + item.author}</Text>
              <Text>{"Title: " + item.title}</Text>
              <Text>{item.storyText}</Text>
              <Text>{"Date: " + item.date.toDate()}</Text>
            </View>
          )}
          keyExtractor= {(item, index)=> index.toString()}
          onEndReached ={this.SearchFilterFunction}
          onEndReachedThreshold={0.7}
        /> 
</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: "row",
    height: 40,
    width: "auto",
    borderWidth: 0.5,
    alignItems: "center",
    backgroundColor: "grey",
  },
  bar: {
    borderWidth: 2,
    height: 30,
    width: 300,
    paddingLeft: 10,
  },
  searchButton: {
    borderWidth: 1,
    height: 30,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
});
