import React,{useState} from 'react'
import MenuItem from './MenuItem';
import './directory.scss';
import {sections} from './data'
function Directory() {
    const [data,setData]=useState(sections)
    return (
        <div className="directory">
        {data.map(({id,...otherProps},i)=><MenuItem key={id} {...otherProps} />)}
        </div>
    )
}

export default Directory
