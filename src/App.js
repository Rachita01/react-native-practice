import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
  // ScrollView
} from "react-native";

function App() {
  const [name, setName] = useState("rachita");
  const [person, setPerson] = useState({ name: "krish", age: 40 });
  const [age, setAge] = useState();
  const [people, setPeople] = useState([
    { name: "Raj", id: "1" },
    { name: "Simran", id: "2" },
    { name: "Darik", id: "3" },
    { name: "Sunny", id: "4" },
    { name: "Faruk", id: "5" },
    { name: "Palak", id: "6" }
  ]);
  const changeData = () => {
    setName("Sumeet");
    setPerson({ name: "Somya", age: 30 });
  };

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello {name}!</Text>
        <Text>
          Hi his/her name is {person.name} and age is {person.age}
        </Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum we ds</Text>
        <Text>Lorem ipsum we ds</Text>
        <Text>Lorem ipsum we ds</Text>
      </View>
      <Button title="update data" onPress={changeData} />
      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        multiline
        keyboardType="numeric"
        placeholder="e.g. 30"
        onChangeText={(val) => setAge(val)}
      />
      <Text>{age}</Text>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "pink",
    justifyContent: "center",
    padding: 10
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    padding: 20
  },
  item: {
    backgroundColor: "pink",
    padding: 30,
    marginTop: 20,
    fontSize: 24,
    marginHorizontol: 24,
    marginRight: 12
  }
});

export default App;
