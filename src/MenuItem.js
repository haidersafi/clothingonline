import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuitem.scss'

function MenuItem({title,imageUrl,size, history ,match,linkUrl}) {
console.log('url',match.url);
    return (<div className={`${size} menuitem`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div
        style={{backgroundImage:`url(${imageUrl})`}}
        className="backgroundimage"/>
    <div className="content">
    <h3 className="title">{title.toUpperCase()}</h3>
    <h5 className="subtitle">Shop Now</h5>
    
    </div>
        
        </div>
        
    )
}

export default withRouter(MenuItem)
