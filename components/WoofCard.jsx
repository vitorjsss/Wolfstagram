import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';

const WoofCard = ({ name, avatarUrl }) => {
    return (
        <View style={styles.card}>
            <Avatar uri={avatarUrl} size={80} />
            <Title>{name}</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
});

export default WoofCard;