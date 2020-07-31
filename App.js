import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from "./component/header";
import TodoItem from "./component/todoItem";
import AddTodo from "./component/addTodo";

export default function App() {
  const [todo, setTodos] = useState([
    {text: 'buy food', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play games', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todo must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('Alert Closed!')}
      ])
    }

  }

  return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        console.log('dismissed keyboard')
      }}>
        <View style={styles.container}>
          <Header/>
          <View style={styles.content}>

            <AddTodo submitHandler={submitHandler}/>

            <View style={styles.list}>

              <FlatList
                  data={todo}
                  renderItem={({item}) => (
                      <TodoItem item={item} pressHandler={pressHandler}/>
                  )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
