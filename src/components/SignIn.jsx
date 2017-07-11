import React, {Component} from 'react';
import { Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {  //Message is provided automatically
        message: ''
      }
    }
  }


  signIn() {
    console.log('this.state', this.state); //SHows username + password
    const { email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error =>  {
        this.setState({error})
      })

  }







  render() {
    return (
      <div className = "form-inline" style = {{margin: '5%'}}>
        <h2>Sign In</h2>
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
            onClick={() => this.signIn()} //Prints the signup function above
          >
            Sign In .. or else
          </button>

        </div>
        <div style= {{padding: '5px'}}>{this.state.error.message}</div>

        <div style= {{padding: '5px'}}><Link to={ '/signup'}>Sign Up Instead</Link></div>

      </div>
    )

  }
}

export default SignIn;
