import React, { useEffect,lazy,Suspense } from "react";
  import { Route, Routes, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";
import Header from "./components/header/header.component";
import { checkUserSession } from "./redux/user/user-action";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

const HomePage = lazy(()=> import('./pages/homepage/homepage.component'));
const ShopPage = lazy(()=> import('./pages/shope/shope.component'));
const SignInAndSignUpPage = lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-sign-up.component'));
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout.component'));



const  App =({checkUserSession,currentUser})=> {
 
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession]);
  
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
        <Routes>
          
          <Route exact path="/" Component={HomePage} />
          <Route path="/shop/*" Component={ShopPage} />
          <Route path="/checkout" Component={CheckoutPage} />
          <Route exact path="/signin" Component={()=> currentUser ? (<Navigate to='/'/>): (<SignInAndSignUpPage/>)} />
         
        </Routes>
        </Suspense>
        </ErrorBoundary>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  checkUserSession:()=> dispatch(checkUserSession())
})



export default connect(mapStateToProps,mapDispatchToProps)(App) ;
