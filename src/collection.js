import React, { useState } from 'react';
import {withRouter} from 'react-router-dom';
import {SHOP_DATA} from './collectionData'
import CollectionItem from './CollectionItem'
import './collection.scss'

function Collection({match}) {
    const [state, setstate] = useState(SHOP_DATA)
    

    const matchCollection=state.find(({routeName})=>routeName===match.params.routename);
console.log(match.url);
    return (
        <div style={{width:"100%"}}>{matchCollection?<h3 style={{textShadow:'2px 2px grey'}}>{matchCollection.title}</h3>:null}
        <div className="collection">
        
        {matchCollection?(matchCollection.items.map(({id,...otherProps})=><CollectionItem key={id} {...otherProps}/>)):<h3>Not Found</h3>}
        </div>
        </div>
    )
}

export default withRouter(Collection);
