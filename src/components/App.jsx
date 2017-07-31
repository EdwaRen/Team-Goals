import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from "./CompleteGoalList";
import Background from '../images/wallpaper.png';

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
    const backgroundStyle = {

      // position: "fixed",
      // top: "-50%",
      // left: "-50%",
      // width: "200%",
      // height: "200%",
      // backgroundImage: "url(" + Background + ")",
      // // zoom: "0.5",
      // // margin: "0",
      // // minWidth: "100%",
      // // minHeight: "100%",
      // // // backgroundpPosition: "center",
      // // // backgroundRepeat: "no-repeat",
      // // backgroundSize: "100% auto",
      // // backgroundColor: "blue",
      //
      // // backgroundSize: "100% 100%",
      // backgroundAttachment: "fixed",
    }
    const goalDarken = {
      paddingTop: "-15px",
      paddingBottom:"-15px",
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
        <div>
          {/* <div style={backgroundStyle}>
            <img src="../images/wallpaper.jpg" alt="" style={imgStyle}></img>
          </div> */}
          <div style={goalDarken}>
            <h3 style = {{opacity:"0.0"}}> s</h3>
          <h3 style={{
            textAlign: "center",
            fontSize: "44px",
            color: "#EEEEEE"
          }}>Team Goals</h3>

          <AddGoal/>
          <h4 style={{
            textAlign: "center",
            fontSize: "10px"
          }}>"One day or day one. Be productive you lazy fuck"</h4>
          <h3 style = {{color:"#444444", backgroundColor:"#000000", fontSize:"10px"}}> s</h3>

        </div>

          <div style={mainDivStyle}>

            <hr/>
              <h4>Goals</h4>
              <GoalList/>
            <hr/>
            <h4>Complete Goals</h4>
            <CompleteGoalList/>
            <hr/>
            <button className="btn btn-danger" onClick={() => this.signOut()}>
              Sign Out

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
