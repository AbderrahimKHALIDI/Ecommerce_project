import React from "react";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import "./collection.styles.scss";



const CollectionPage = () => {

const param = useParams()
const collection = useSelector(selectCollection(param.collectionId));

console.log(collection)
  return (
    
    <div className="collection-page">
      <h2>Collection Page </h2>
    </div>
  );
};


export default CollectionPage;
