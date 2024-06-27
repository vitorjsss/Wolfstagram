import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WoofPost = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.imageContainer} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    imageContainer: {
        flex: 1,
        width: 150,
        height: 100,
        marginRight: 10,
        borderRadius: 10,
    },
    textContainer: {
        flex: 2,
    },
    title: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default WoofPost;
