import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from '../globalStyle/Global'
import Card from '../shared/Card';

const ReviewDetails = ({ navigation}) => {
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.reviewStyle}>Movie Name: {navigation.getParam('title')}</Text>
            <Text style={globalStyles.reviewStyle}>Rating: {navigation.getParam('rating')}</Text>
            <Text style={globalStyles.reviewStyle}>Genre: {navigation.getParam('body')}</Text>
            </Card>
        </View>
    )
}

export default ReviewDetails
