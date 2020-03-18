import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem}
                onPress={() => props.navigation.navigate('CategoriesMealsScreen', { catId: itemData.item.id, catTitle: itemData.item.title })}>
                <View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

     return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2} />)
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow: "hidden",
        elevation: 3,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 18,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    title: {
        fontFamily: 'opensansbold',
        fontSize: 22,
        textAlign: "right",
    }
})
export default CategoriesScreen;
