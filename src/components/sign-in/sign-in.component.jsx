import React from "react";
import { connect } from "react-redux";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user-action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
const {emailSignInStart}=this.props;
    const {email,password} = this.state;

emailSignInStart(email,password);
  };

  handlechange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {googleSignInStart}=this.props
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handlechange={this.handlechange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            handlechange={this.handlechange}
            label="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in</CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch =>({
  googleSignInStart:()=>dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
