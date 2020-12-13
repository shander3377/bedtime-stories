import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
//   SearchFilterFunction = async (searchtext) => {
//       var text = searchtext.split();
//       const searched = await db.collection("stories").where()
//   }
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.bar}
          placeholder="Enter Book Id or Student Id"
          onChangeText={(text) => {
            this.setState({ search: text });
          }}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.searchTransactions(this.state.search);
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
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
