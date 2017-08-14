import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from "./CompleteGoalList";
import Background from '../images/wallpaper.png';
import {Link} from 'react-router';


class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();

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
      color: "#EEEEEE"
    }

    return (
      <div style ={{
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0"
      }}>
        <title>Team Goals</title>
        <div>
          {/* <div style={backgroundStyle}>
            <img src="../images/wallpaper.jpg" alt="" style={imgStyle}></img>
          </div> */}
          <div style={goalDarken}>
            <h3 style={{
              opacity: "0.0"
            }}>
              s</h3>
            <h3 style={{
              textAlign: "center",
              fontSize: "44px",
              color: "#EEEEEE"
            }}>Team Goals</h3>

            <AddGoal/>
            <h4 style={{
              textAlign: "center",
              fontSize: "10px"
            }}>"One day or day one. Be productive you lazy degenerate"</h4>
            <h3 style={{
              color: "#000000",
              backgroundColor: "#000000",
              fontSize: "10px"
            }}>
              s</h3>

          </div>

          <div style={mainDivStyle}>

            <hr/>
            <h4>Goals</h4>
            <GoalList/>
            <hr/>
            <h4>All Completed Goals</h4>
            <CompleteGoalList/>
            <hr/>
            <button className="btn btn-danger" onClick={() => this.signOut()}>
              Sign Out
            </button>
          </div>
          <div style={{textAlign:"center", paddingBottom:"15px"}}>

            <hr/>
            <h3 style = {{textAlign:"center", marginTop:"45px"}}>Follow us on <a href = "https://github.com/EdwaRen">GitHub</a></h3>
            <button className="btn btn-link"  type="button" style={{textAlign:"center"}}  >
              <Link to={'/privacy'} >Privacy Policy</Link>
            </button>
            <button className="btn btn-link"  type="button" style={{textAlign:"center"}} >
              <Link to={'/terms'} >Terms Of Use</Link>
            </button>

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //  console.log('state', state);
  return {}
}
export default connect(mapStateToProps, null)(App);
