import { loadCategoriesAction } from "../reducer/categoryReducer";

export const loadCategories = async (dispatch) => {
    const link = 'http://localhost:3333/categories/all';


    const resp = await fetch(link);
    const data = await resp.json();
    dispatch(loadCategoriesAction(data));
}