import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const AppInputField = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                secureTextEntry={props.secure}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.placeholder}
                onSubmitEditing={props.onSubmitEditing}
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default AppInputField;
