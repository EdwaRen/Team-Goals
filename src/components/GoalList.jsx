import React, { Component} from 'react';
import { connect} from 'react-redux';
import {goalRef} from '../firebase';
import { setGoals} from '../actions';
import GoalItem from './GoalItem';
import * as firebase from 'firebase';


class GoalList extends Component {
  componentDidMount() {
    //finds goals in the database from goalRef
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title, date} = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey , date});
      })
      // console.log('goals', goals);
      this.props.setGoals(goals);
    })

  }

  render() {
    // var fb = new Firebase(URL);

// listen for all changes and update
    // console.log("this.props.goals", this.props.goals);
    return (
      <div>{
        this.props.goals.map((goal, index) => {
          //index is so that each goal has a unique key identifier
          return(
            <GoalItem key = {index} goal = {goal}/>
          )
        })

      }</div>
    )
  }
}

function mapStateToProps(state) {
  const { goals} = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals}) (GoalList);
