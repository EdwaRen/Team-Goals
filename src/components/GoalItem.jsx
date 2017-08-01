import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';
import moment from 'moment';
import combineReducers from '../reducers/index.js';
import {firebaseApp} from '../firebase';
import * as firebase from 'firebase';

class GoalItem extends Component {

  completeGoal() {
    //Add to complete goals on the database
    //Remove this goal from database
    const {email} = this.props.user;
    const {title, serverKey} = this.props.goal;
    const {date} = this.props.goal;

    // console.log('server', serverKey);
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email, title, date});
  }

  render() {
    // console.log('this.props.goal', this.props.goal);
    const {email, title} = this.props.goal;
    var userCurrent = firebase.auth().currentUser;

    // var currentEmail = firebaseApp.getAuth().password.email;
    // console.log("emails match", email, userCurrent);

    if (email == userCurrent.email) {

      return (
        <div style={{
          margin: '5px'
        }}>
          <strong>{title}</strong>
          <span style ={{
            marginRight: '5px'
          }}> | submitted by <em>{email}</em>
          </span>
          <button className="btn btn-sm btn-primary" onClick={() => this.completeGoal()}>
            Complete
          </button>
        </div>
      )
    } else {
      return <div></div>
    }
  }

}

function mapStateToProps(state) {
  const {user} = state;

  return {user}
}

export default connect(mapStateToProps, null)(GoalItem);
