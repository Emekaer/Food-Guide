import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import { toggleFavourites } from '../store/actions/meals'



const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>

    )
}
const MealDetailScreen = props => {
    const { mealId } = props.route.params;

    const availableMeals = useSelector(state => state.meals.meals)
    const dispatch = useDispatch();
    const currentMealIsFavourite = useSelector(state =>
        state.meals.favouriteMeals.some(meal => meal.id === mealId))

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourites(mealId));
    }, [dispatch, mealId]);

    
    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavourite});
    }, [currentMealIsFavourite]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavouriteHandler});
    }, [toggleFavouriteHandler]);


    const selectedMeals = availableMeals.find(meal => meal.id === mealId)
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeals.imageUrl }}
                style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeals.duration}m</Text>
                <Text>{selectedMeals.complexity.toUpperCase()}</Text>
                <Text>{selectedMeals.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeals.ingredients.map((ingredient) => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeals.steps.map((steps) => (<ListItem key={steps}>{steps}</ListItem>))}

        </ScrollView>
    )
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'opensansbold',
        fontSize: 22,
        textAlign: "center",
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    }
})
export default MealDetailScreen;
