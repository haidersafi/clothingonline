import React,{useState} from 'react';
import './shopppage.scss'
import {SHOP_DATA} from './collectionData';
import CollectionPreview from './CollectionPreview';
function ShopPage() {
const [state, setstate] = useState(SHOP_DATA)
    return (
        <div className="shoppage">
        {state.map(({id,...otherProps})=><CollectionPreview key={id} {...otherProps} />)}
        </div>
    )
}

export default ShopPage
