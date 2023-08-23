import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shope/shope.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";


class  App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      this.setState({ currentUser:user});
      console.log(user)
    })
  }
  render(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/signin" Component={SignInAndSignUpPage} />
      </Routes>
    </div>
  );
  }
}

export default App;
