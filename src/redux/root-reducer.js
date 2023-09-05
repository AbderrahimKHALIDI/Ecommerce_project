import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"; 
import { default as Storage } from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user-reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


const persistConfig = {

    key:'root',
    storage: Storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
    });

export default persistReducer(persistConfig , rootReducer)