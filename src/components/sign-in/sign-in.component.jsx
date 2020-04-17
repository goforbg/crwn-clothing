import React from 'react';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import './sign-in.styles.scss';

import {
   SignInContainer,
   SignInTitle,
   ButtonsBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: '',
      };
   }

   onSubmit = async (event) => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' });
      } catch (error) {
         console.log('error signing in user', error);
      }

      // alert(`${this.state.email}, ${this.state.password} `);
   };

   handleChange = (event) => {
      const { value, name } = event.target;

      this.setState({
         [name]: value,
      });
   };

   render() {
      return (
         <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
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
               <ButtonsBarContainer>
                  <CustomButton type="submit">SIGN IN</CustomButton>
                  <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                     SIGN IN WITH GOOGLE
                  </CustomButton>
               </ButtonsBarContainer>
            </form>
         </SignInContainer>
      );
   }
}

export default SignIn;
