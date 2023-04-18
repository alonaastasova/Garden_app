const CATEGORIES_LOAD = "CATEGORIES_LOAD";

export const loadCategoriesAction = (payload) => ({type: CATEGORIES_LOAD, payload})

export const categoryReducer = (state = [], action) => {
    if(action.type === CATEGORIES_LOAD){
        return action.payload
    }
    return state
}