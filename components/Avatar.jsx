import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({ uri, size = 50 }) => {
    return (
        <Image
            source={{ uri }}
            style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
        />
    );
};

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: '#ccc',
    },
});

export default Avatar;