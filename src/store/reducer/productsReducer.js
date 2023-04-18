const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_SORT = 'PRODUCTS_SORT';
const PRODUCTS_PRICE_FILTER = 'PRODUCTS_PRICE_FILTER';
const PRODUCTS_CHECK_DISCOUNT = 'PRODUCTS_CHECK_DISCOUNT';

export const loadProductsAction = (payload) => ({type: PRODUCTS_LOAD, payload});
export const sortProductsAction = (payload) => ({type: PRODUCTS_SORT, payload});
export const priceFilterProductsAction = (payload) => ({type: PRODUCTS_PRICE_FILTER, payload});
export const checkDiscountProductsAction = (payload) => ({type: PRODUCTS_CHECK_DISCOUNT, payload});

export const productsReducer = (state = [], action) => {
    if(action.type === PRODUCTS_LOAD){
        return action.payload.map(elem => ({...elem, show: {price: true, check: true}}))
    }else if(action.type === PRODUCTS_SORT){
        if(action.payload === 0){
            state.sort((a, b) => a.id - b.id)
        }else if(action.payload === 1){
            state.sort((a, b) => a.price - b.price)
        }else if(action.payload === 2){
            state.sort((a, b) => b.price - a.price)
        }
        return [...state]
    }else if(action.type === PRODUCTS_PRICE_FILTER){
        const {min, max} = action.payload;
        return state.map(elem => {
            elem.show.price = elem.price <= max && elem.price >= min
            return elem
        })
    }else if(action.type === PRODUCTS_CHECK_DISCOUNT){
        if(action.payload === true){
            return state.map(elem => {
                elem.show.check = elem.discont_price !== null;
                return elem})
        }else if(action.payload === false){
            return state.map(elem => {
                elem.show.check = true;
                return elem})
        }
    }
    return state
}