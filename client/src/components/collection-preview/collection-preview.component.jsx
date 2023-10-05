import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer
  } from './collection-preview.styles';

const CollectionPreview = ({title,items})=>{

    const location = useLocation();
    const currentPath = location.pathname;
    return(
    <CollectionPreviewContainer>
<TitleContainer>

    <Link to={`${currentPath}/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
</TitleContainer>
<PreviewContainer>

{
    items
    .filter((item,idx)=>idx<4)
    .map((item)=>(
        <CollectionItem key={item.id} item={item}/>
    ))
}
</PreviewContainer>

    </CollectionPreviewContainer>
    )
}

export default CollectionPreview;