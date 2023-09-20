import React from "react";
  import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shope/shope.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import { checkUserSession } from "./redux/user/user-action";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
class App extends React.Component {
 
  unsubscribeFormAuth = null;
  componentDidMount() {
   
   const {checkUserSession}=this.props;
   checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFormAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop/*" Component={ShopPage} />
          <Route path="/checkout" Component={CheckoutPage} />
          <Route exact path="/signin" Component={()=> this.props.currentUser ? (<Navigate to='/'/>): (<SignInAndSignUpPage/>)} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  checkUserSession:()=> dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App) ;
