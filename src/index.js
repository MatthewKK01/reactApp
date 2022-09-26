import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import GroceryCart from './GroceryCart';
import './index.css';
import ItemList from "./itemList";
import { produce, pantryItems } from "./storeItems";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GroceryCart/>
);
