import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';

const FavouritesScreen = (props) =>{
    const favMeals= useSelector(state => state.meals.favouriteMeals) 
    
    if(favMeals.length === 0  || !favMeals){
    return(<View style={styles.content}>
        <Text>No Favourites!</Text>
        <Text>Add some favourites now!!!</Text>
    </View>)}
    else{
    return(
        <MealList listData={favMeals} navigation={props.navigation}/>
    )}
};


const styles= StyleSheet.create({
    content:{
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    }
})
export default FavouritesScreen;
