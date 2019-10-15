import React from 'react';
import HorizontalLoginForm from '../../components/login/login';

class Auth extends React.Component {
    constructor(props) {
      super(props);
      this.state = {   
        form:''    
      };     
    }
  
  form = () => {
    console.log('hello');    
  }

    render() {
      return (

        <HorizontalLoginForm  />
        
      );
    }
  }

  export default Auth;