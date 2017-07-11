import React, {Component} from 'react';
import { firebaseApp } from '../firebase';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message:''
      }
    }
  }

  signUp() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error  => {
        console.log('error', error);
        this.setState({error})
      })
  }


  render() {
    return (
      <div className = "form-inline" style = {{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className = "form-group">
          <input
            className = "form-control"
            type="text"
            placeholder="email"
            style = {{marginRight: '5px'}}
            onChange={ event => this.setState({ email: event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            style = {{marginRight: '5px'}}
            onChange= {event => this.setState({ password: event.target.value})}
          />
          <button
            className="btn btn-primary"
            type = "button"
            onClick={() => this.signUp()} //Prints the signup function above
          >
            Sign Up
          </button>

        </div>
        <div style= {{padding: '5px'}}>{this.state.error.message}</div>

      </div>
    )
  }
}

export default SignUp;
