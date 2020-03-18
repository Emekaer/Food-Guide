import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Colors.primaryColor}
                value={props.state}
                onValueChange={props.onChange} />

        </View>
    )
}


const FiltersScreen = props => {
    const {navigation} =props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
        };
        
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
       navigation.setParams({ save : saveFilters });
    }, [saveFilters]);


    return (
        <View style={styles.screen}>
            <Text style={styles.title} >
                Available Filters/Restrictions
            </Text>
            <FilterSwitch label={'Gluten-Free'} state={isGlutenFree}
                onChange={() => setIsGlutenFree(!isGlutenFree)} />
            <FilterSwitch label={'Lactose-Free'} state={isLactoseFree}
                onChange={() => setIsLactoseFree(!isLactoseFree)} />
            <FilterSwitch label={'Vegan'} state={isVegan}
                onChange={() => setIsVegan(!isVegan)} />
            <FilterSwitch label={'Vegetarian'} state={isVegetarian}
                onChange={() => setIsVegetarian(!isVegetarian)} />
        </View>)
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '80%',
        alignItems: "center",
        marginVertical: 10,
    },
    title: {
        fontFamily: 'opensansbold',
        fontSize: 22,
        margin: 10,
        textAlign: "center",
    },

})
export default FiltersScreen;
