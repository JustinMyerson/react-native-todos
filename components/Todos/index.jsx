import { Text, TextInput, Button, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import Todo from "../../Todo";

export default function Todos({
  todos,
  id,
  text,
  isCompleted,
  onToggleTodo,
  onDeleteTodo,
}) {
  return (
    <View style={styles.todosContainer}>
      <ScrollView>
        {todos.map(({ id, text, isCompleted }) => (
          <Todo
            key={id}
            id={id}
            text={text}
            isCompleted={isCompleted}
            onToggleTodo={onToggleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  todosContainer: {
    flex: 1,
    backgroundColor: "#e56e00",
    width: "100%",
    borderColor: "#000",
    borderWidth: 2,
  },
});
