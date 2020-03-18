import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

const CategoriesMealsScreen = (props) => {
  

    const { catId } = props.route.params;

    const availableMeals= useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayedMeals.length === 0){
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>
                    No meals found, maybe check filters?
                </Text>
            </View>
        )
    }

    return (

     <MealList listData={displayedMeals} navigation={props.navigation} />)
}


export default CategoriesMealsScreen;
