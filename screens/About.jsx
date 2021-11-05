import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from '../globalStyle/Global';


const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textStyle}>About Component</Text>
        </View>
    )
}

export default About
