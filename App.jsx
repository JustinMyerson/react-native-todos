import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import List from "./components/List";
import SearchBar from "./components/SearchBar";

import uuid from "react-native-uuid";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  function onAddTodo(text) {
    if (text !== "") {
      setTodos((currentTodos) => {
        const newTodo = { id: uuid.v4(), text: text, isCompleted: false };
        return [...currentTodos, newTodo];
      });
    } else {
      alert("Enter a Valid To Do");
    }
  }

  function onDeleteTodo(id) {
    setTodos((currentTodos) => {
      const filteredTodos = currentTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  }

  function onToggleTodo(id) {
    console.log("toggled");
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <View style={styles.container}>
      <Header onAddTodo={onAddTodo} />
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {/* <List
        searchPhrase={searchPhrase}
        data={fakeData}
        setClicked={setClicked}
      /> */}
      <Todos
        todos={todos}
        onToggleTodo={onToggleTodo}
        onDeleteTodo={onDeleteTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
