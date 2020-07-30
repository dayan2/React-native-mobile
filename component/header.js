import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function Header() {
    const [todo, setTodos] = useState([
        { text: 'buy food', key: '1'},
        { text: 'create an app', key: '2'},
        { text: 'play games', key: '3'},
    ]);

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 80,
        paddingTop: 38
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
});
