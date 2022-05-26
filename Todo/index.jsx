import { View, Text, Pressable, Switch, Button } from "react-native";
import React from "react";
import style from "./style";
import AntDesign from "react-native-vector-icons/AntDesign";

function Todo({ id, text, isCompleted, onToggleTodo, onDeleteTodo }) {
  function onTodoPressed() {
    onToggleTodo(id);
  }
  function onDeletePressed() {
    onDeleteTodo(id);
  }
  return (
    <Pressable onPress={onTodoPressed}>
      <View style={style.todoContainer}>
        <Text style={style.totoTitle}>{text}</Text>
        <Switch value={isCompleted} style={style.toggleDoneButton} />
        <AntDesign.Button
          name="close"
          style={style.deleteButton}
          onPress={onDeletePressed}
        />
      </View>
    </Pressable>
  );
}

export default Todo;
