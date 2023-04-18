
const defaultBasket = [
    {id: 1, count: 3},
    {id: 2, count: 7},
    {id: 3, count: 5},
];

const BASKET_LOAD = 'BASKET_LOAD';
const BASKET_ADD = 'BASKET_ADD';
const BASKET_INCREMENT = 'BASKET_INCREMENT';
const BASKET_DECREMENT = 'BASKET_DECREMENT';
const BASKET_DELETE = 'BASKET_DELETE';
const BASKET_CLEAR = 'BASKET_CLEAR';

export const basketAddAction = (payload) => ({type: BASKET_ADD, payload});
export const basketIncrementAction = (payload) => ({type: BASKET_INCREMENT, payload});
export const basketDecrementAction = (payload) => ({type: BASKET_DECREMENT, payload});
export const basketDeleteAction = (payload) => ({type: BASKET_DELETE, payload});
export const basketClearAction = () => ({type: BASKET_CLEAR});

export const basketReducer = (state = defaultBasket, action) =>{
    if (action.type === BASKET_LOAD){
        return action.payload
    }else if(action.type === BASKET_ADD){
        const target = state.find(({id}) => id === action.payload);
        if(target === undefined){
            return [...state, {id: action.payload, count: 1}]
        }else{
            target.count++;
            return [...state]
        }
    }else if(action.type === BASKET_INCREMENT){
        const target = state.find(({id}) => id === action.payload);
        target.count++;
        return [...state]
    }else if(action.type === BASKET_DECREMENT){
        const target = state.find(({id}) => id === action.payload);
        if (target.count === 1) {
            return state.filter(({id}) => target.id !== id);
        }
        target.count--;
        return [...state]
    }else if(action.type === BASKET_DELETE){
        return state.filter(({id}) => id !== action.payload);
    }else if(action.type === BASKET_CLEAR){
        return state = []
    }
    return state
}