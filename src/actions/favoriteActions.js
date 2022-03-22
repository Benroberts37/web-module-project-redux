import { REMOVE_FAVORITE } from "./favoritesActions"

export const TOGGLE_FAVORITES="TOGGLE_FAVORITES"
export const ADD_FAVORITE="ADD_FAVORITE"
export const REMOVE_FAVORITES="REMOVE_FAVORITES"

const toggleFavorites = () => {
    return({type:TOGGLE_FAVORITES})
}

const addFavorite = (movie) => {
    return({type:ADD_FAVORITE, payload:movie})
}

const removeFavorites = () => {
    return({type:REMOVE_FAVORITE, payload: id})
}

