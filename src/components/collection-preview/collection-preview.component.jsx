import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './collection-preview.component.styles.scss';

const CollectionPreview = ({title,items})=>{

    const location = useLocation();
    const currentPath = location.pathname;
    return(
    <div className="collection-preview">
<h1 className="title">

    <Link to={`${currentPath}/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
</h1>
<div className="preview">
{
    items
    .filter((item,idx)=>idx<4)
    .map((item)=>(
        <CollectionItem key={item.id} item={item}/>
    ))
}
</div>

    </div>
    )
}

export default CollectionPreview;