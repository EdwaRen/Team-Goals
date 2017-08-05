import React, {Component} from 'react';
import { Link } from 'react-router';
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
    // console.log('this.state', this.state);
    const {email, password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error  => {
        console.log('error', error);
        this.setState({error})
      })
  }


  render() {

    const mainDivStyle = {
      width: '800px',
      // height: '600px',
      backgroundColor: 'white',
      opacity: "0.9",

      // position: 'absolute',
      /*it can be fixed too*/
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      margin: 'auto',

      /*this to solve "the content will not be cut when the window is smaller than the content": */
      maxWidth: '100%',
      paddingBottom: "30px",
      // maxHeight:'100%',
      // overflow: 'auto'
    }
    const backgroundStyle = {}
    const goalDarken = {
      textAlign:"center",
      paddingTop: "-15px",
      paddingBottom: "-15px",
      backgroundColor: "#444444",
      // color: "#EEEEEE"
    }

    return (
      <div className = "form-inline" >
        <div style={goalDarken}>
          <h3 style={{
            fontSize: "30px",
            opacity: "0.0"
          }}>
            s</h3>
        <h2 style ={{
          textAlign: "center",
          fontSize: "44px",
          color: "#FFFFFF"
        }}>Sign Up</h2>
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
        <button className="btn btn-primary"  type="button">
          <Link to={'/signin'} style={{color:"#FFFFFF"}}>Sign In Instead</Link>
        </button>

        <h3 style={{
          fontSize: "0px",
          opacity: "0.0"
        }}>
          s</h3>


        <div style = {{
          backgroundColor:"#000000",
          height:"10px"
        }}></div>
      </div>

      <div style = {mainDivStyle}>
        <h3 style = {{textAlign:"center", marginTop:"45px"}}>Follow us on <a href = "https://github.com/EdwaRen">GitHub</a></h3>
        <button className="btn btn-link"  type="button">
          <Link to={'/privacy'} >Privacy Policy</Link>
        </button>
        <button className="btn btn-link"  type="button">
          <Link to={'/terms'} >Terms Of Use</Link>
        </button>

      </div>
      </div>
    )
  }
}

export default SignUp;
