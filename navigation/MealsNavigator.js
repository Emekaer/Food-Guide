import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';


import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const MealsNavigator = () => {


    return (
        <Stack.Navigator initialRouteName="CategoriesScreen" >
            <Stack.Screen name="MealsCategories" options={(navData) => ({
                title: 'Meals Categories',
                headerStyle: { backgroundColor: Colors.primaryColor },
                headerTitleStyle:{
                    fontFamily: 'opensansbold'
                },
                headerTintColor: 'white',
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='menu'
                        iconName='ios-menu'
                        onPress={() => { navData.navigation.dispatch(DrawerActions.toggleDrawer()) }} />
                </HeaderButtons>)

            })}
                component={CategoriesScreen} />
            <Stack.Screen name="CategoriesMealsScreen"
                options={({ route }) => ({
                    title: route.params.catTitle,
                    headerStyle: { backgroundColor: Colors.primaryColor },
                    headerTitleStyle:{
                        fontFamily: 'opensansbold'
                    },
                    headerTintColor: 'white',
                })}
                component={CategoriesMealsScreen} />
            <Stack.Screen name="MealDetailScreen"

                options={({ route }) => ({
                    title: route.params.mealTitle,
                    headerStyle: { backgroundColor: Colors.primaryColor },
                    headerTintColor: 'white',
                    headerTitleStyle:{
                        fontFamily: 'opensansbold'
                    },
                    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item title='Favorite'
                            iconName={route.params.isFav ? 'ios-star': 'ios-star-outline'}
                            onPress={route.params.toggleFav} />
                    </HeaderButtons>)
                })}
                component={MealDetailScreen}
            />

        </Stack.Navigator>
    )
};

const FavNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name={'Favourites Screen'}
            component={FavouritesScreen}
            options={(navData) => ({
                title: 'Your Favourites!',
                headerStyle: { backgroundColor: Colors.primaryColor },
                headerTitleStyle:{
                    fontFamily: 'opensansbold'
                },
                headerTintColor: 'white',
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='menu'
                        iconName='ios-menu'
                        onPress={() => { navData.navigation.dispatch(DrawerActions.toggleDrawer()) }} />
                </HeaderButtons>)

            })} />
        <Stack.Screen name={'Meal Detail'} component={MealDetailScreen} />
    </Stack.Navigator>
    )
};

const MealsTabNavigator = () => {
    return (<Tab.Navigator initialRouteName="Meals"
        tabBarOptions={{
            activeTintColor: Colors.accentColor,

        }}>
        <Tab.Screen name={'Meals'}
            component={MealsNavigator}
            options={{
                tabBarIcon: ({ color }) => 
                { return <Ionicons name='ios-restaurant' size={25} color={color} /> },
                labelStyle:{
                    fontFamily:'opensans'
                }
            }} />
        <Tab.Screen name={'Favourites'}
            component={FavNavigator}
            options={{
                tabBarIcon: ({ color }) => 
                { return <Ionicons name='ios-star' size={25} color={color} /> },
                labelStyle:{
                    fontFamily:'opensans'
                }}} 
           />
    </Tab.Navigator>)
};

const FiltersNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Screen name={'Filters'} component={FiltersScreen}
            options={(navData) => ({
                title: 'Filters Screen',
                headerTitleStyle:{
                    fontFamily: 'opensansbold'
                },
                headerStyle: { backgroundColor: Colors.primaryColor },
                headerTintColor: 'white',
                headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='menu'
                        iconName='ios-menu'
                        onPress={() => { navData.navigation.dispatch(DrawerActions.toggleDrawer()) }} />
                </HeaderButtons>),
                headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Save'
                        iconName='ios-save'
                        onPress={navData.route.params.save}/>
                </HeaderButtons>)

            })} />
    </Stack.Navigator>)
};

const MainNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName={'Meals'}
            drawerContentOptions={{
                activeTintColor: Colors.accentColor,
                labelStyle:{
                    fontFamily:'opensansbold'
                }
            }}>
            <Drawer.Screen name={'Meals'} component={MealsTabNavigator} />
            <Drawer.Screen name={'Filters'}
                component={FiltersNavigator}
                options={{
                    title: 'Filter Meals'
                }} />
        </Drawer.Navigator>
    )
};




export default MainNavigator;