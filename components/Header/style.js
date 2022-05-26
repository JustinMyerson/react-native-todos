import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  todoHeading: {
    fontSize: 20,
    paddingBottom: 5,
    textTransform: "uppercase",
  },

  todoInput: {
    padding: 10,
    borderColor: "#000",
    borderWidth: 2,
    marginRight: 10,
    backgroundColor: "#b46e7c",
  },

  addToDoButton: {
    borderColor: "#000",
    borderWidth: 2,
  },
});

export default headerStyles;
