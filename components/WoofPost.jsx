import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WoofPost = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.imageContainer} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text numberOfLines={2}>{props.description}</Text>
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
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    imageContainer: {
        flex: 1,
        width: 150,
        height: 115,
        marginRight: 20,
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
