import { loadProductsAction } from "../reducer/productsReducer";

export const loadProducts = async (dispatch) => {
    const link = 'http://localhost:3333/products/all';

    const resp = await fetch(link);
    const data = await resp.json();
    dispatch(loadProductsAction(data));
}