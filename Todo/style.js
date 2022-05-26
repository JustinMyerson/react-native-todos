import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  todoContainer: {
    minHeight: 100,
    width: "100%",
    borderColor: "#000",
    backgroundColor: "#b46e7c",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingBottom: 5,
    paddingTop: 5,
    minHeight: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  totoTitle: {
    fontSize: 20,
    paddingBottom: 5,
    textTransform: "capitalize",
  },

  toggleDoneButton: {
    marginTop: 10,
    marginBottom: 10,
  },

  deleteButton: {
    backgroundColor: "#b46e7c",
  },
});

export default styles;
