export const TOGGLE_FAVOURITES = 'TOGGLE_FAVOURITES';
export const SET_FILTERS ='SET_FILTERS;'

export const toggleFavourites = id => {
    return {type: TOGGLE_FAVOURITES, mealId: id};
};

export const setFilters = filterSetting => {
    return{type: SET_FILTERS, filters: filterSetting};
};