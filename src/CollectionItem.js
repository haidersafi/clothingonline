import React from 'react'
import './collectionitem.scss'
function CollectionItem({imageUrl,price,name}) {
    return (
        <div className="collection-item">
            <div className="background" style={{backgroundImage:`url(${imageUrl})`}}/>
            <button class="cart">Add To Cart</button>
         <div className="collection-footer" style={{zIndex:'3',backgroundColor:'whitesmoke'}}>
            <span>{name}</span>
            <span>{price}<span style={{color:'green'}}>$</span></span>
            </div>
        </div>
    )
}

export default CollectionItem
