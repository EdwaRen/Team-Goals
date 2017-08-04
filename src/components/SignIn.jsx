import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: { //Message is provided automatically
        message: ''
      }
    }
  }

  signIn() {
    // console.log('this.state', this.state); //SHows username + password
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error => {
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
      paddingTop: "-15px",
      paddingBottom: "-15px",
      backgroundColor: "#444444",
      // color: "#EEEEEE"
    }

    return (
      <div style ={{
        textAlign: "center",
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0"
      }}>
        <div className="form-inline" style ={{
          // backgroundColor: "#444444"
        }}>
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
            }}>Sign In</h2>
            {/* </div>
          <div id ={mainDivStyle}> */}
            <div className="form-group">
              <input className="form-control" type="text" placeholder="email" style={{
                marginRight: '5px'
              }} onChange={event => this.setState({email: event.target.value})}/>
              <input className="form-control" type="password" placeholder="password" style={{
                marginRight: '5px'
              }} onChange= {event => this.setState({ password: event.target.value})}/>
              <button className="btn btn-primary" type="button" onClick={() => this.signIn()} //Prints the signup function above
              >
                Sign In .. or else
              </button>

            </div>
            <div style={{
              padding: '5px'
            }}>{this.state.error.message}</div>

            <button className="btn btn-primary"  type="button">
              <Link to={'/signup'} style={{color:"#FFFFFF"}}>Sign Up Instead</Link>
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
          {/* <h3 style={{
            backgroundColor: "#000000",
            fontSize: "5px",
            opacity: "0.0"
          }}>
            s</h3> */}

        </div>
      </div>
    )

  }
}

export default SignIn;
