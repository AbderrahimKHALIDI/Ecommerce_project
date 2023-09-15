import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { firestore ,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";


const CollectionsOverviewWithSpiner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpiner = WithSpinner(CollectionPage)
class ShopPage extends React.Component {
state={
  loading:true
};

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections}=this.props;

    const collectionRef = firestore.collection("collections");
    collectionRef.get().then(async (snapshot) => {
      const  collectionsMap= convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading:false});
          });
    
    
  }

  render() {
    const {loading}=this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route path="/" Component={(props)=><CollectionsOverviewWithSpiner isLoading={loading} {...props}/>} />
          <Route path="/:collectionId" element={  <CollectionPageWithSpiner isLoading={loading}  />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps) (ShopPage);
