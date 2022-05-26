import { Text, TextInput, Button, StyleSheet, View } from "react-native";
import headerStyles from "./style";
import React, { useState } from "react";

function Header({ onAddTodo, onTextInputChange }) {
  const [todoInput, setTodoInput] = useState("");

  function onTextInputChange(text) {
    setTodoInput(text);
  }
  function onButtonPress() {
    onAddTodo(todoInput);
  }
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.todoHeading}>To Do List</Text>
      <TextInput
        placeholder="Add To Do Here"
        onChangeText={onTextInputChange}
        value={todoInput}
        style={headerStyles.todoInput}
      />
      <Button
        title="Add To Do"
        onPress={onButtonPress}
        style={headerStyles.addToDoButton}
      />
    </View>
  );
}

export default Header;
