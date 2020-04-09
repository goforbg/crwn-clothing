import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: '',
      };
   }

   onSubmit = (e) => {
      e.preventDefault();

      alert(`${this.state.email}, ${this.state.password} `);
   };

   handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({
         [name]: value,
      });
   };

   render() {
      return (
         <div className="sign-in">
            <h1 className="title">I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.onSubmit}>
               <FormInput
                  name="email"
                  type="text"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label="Email"
                  required
               />
               <FormInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label="Password"
                  required
               />
               <div className="buttons">
                  <CustomButton type="submit">SIGN IN</CustomButton>
                  <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                     SIGN IN WITH GOOGLE
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

export default SignIn;
