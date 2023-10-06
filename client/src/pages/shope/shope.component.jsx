import React, { useEffect,lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionPageContainer= lazy(()=> import('../collection/collection.container'));
const CollectionsOverviewContainer=lazy(()=> import('../../components/collections-overview/collections-overview.container'))


const ShopPage =({ fetchCollectionsStart })=> {
  
  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart])


    return (
      <div className="shop-page">
        <Suspense fallback={Spinner}>
        <Routes>
          <Route
            path="/"
            Component={
              CollectionsOverviewContainer
              
            }
          />
          <Route
            path="/:collectionId"
            Component={CollectionPageContainer
            }
          />
        </Routes>
        </Suspense>
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});



export default connect(null, mapDispatchToProps)(ShopPage);
