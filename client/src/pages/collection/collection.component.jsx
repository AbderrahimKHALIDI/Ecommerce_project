import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import "./collection.styles.scss";



const CollectionPage = () => {

const param = useParams()
const collection = useSelector(selectCollection(param.collectionId));
const {title , items} = collection

  return (
    
    <div className="collection-page">
      <h2 className="title">{title} </h2>
      <div className="items">
        {
          items.map(item =>(
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  );
};


export default CollectionPage;
