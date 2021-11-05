import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import {globalStyles} from '../globalStyle/Global'
import Card from '../shared/Card';

const Home = ({ navigation}) => {

    const [reviews, setReviews] = useState([
        {title:'Black Hawk Down', rating:'9/10', body:'Movie on War', key:1},
        {title:'Die Hard series', rating:'7.2/10', body:'An Action movie', key:2},
        {title:'Anabelle', rating:'6/10', body:'Horror Movie', key:3},
        {title:'Modern Family', rating:'8.4/10', body:'Family drama & Comedy', key:4},
    ])

// const handleNavigation = ()=> {
//      navigation.navigate('ReviewDetails');  // navigate & push both will work. Also .goBack() pop up the screen / back to older one
// }
    return (
        <View style={globalStyles.container}>
        <FlatList 
            data={reviews}
            renderItem={({ item })=>(
                /** here we are sending data to ReviewDetails page by passing 'item' object which contains values of
                 title, desc, rating.
                 */
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}> 
                    <Card>
                    <Text style={globalStyles.textStyle}>{ item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
            
        {/* <Button 
            title='Navigate to Review page'
            onPress={handleNavigation}
        /> */}
        </View>
    )
}

export default Home
