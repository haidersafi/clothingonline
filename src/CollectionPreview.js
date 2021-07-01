import React from 'react';
import { withRouter } from 'react-router'; 
import CollectionItem from './CollectionItem'
import './collectionpreview.scss';


function CollectionPreview({title,items,history,match,routeName}) {
    return (
        <div className="collectionshort">
            <h3 style={{textShadow:'2px 2px grey'}} onClick={()=>history.push(`${match.url}/${routeName}`)}>{title}</h3>
            <div className="collectionpreview">
            {items.filter((item,idx)=>idx<4).map(({id,...itemProps})=><CollectionItem key={id} {...itemProps} />)}
            </div>
            </div>
            
    )
}

export default withRouter(CollectionPreview)
