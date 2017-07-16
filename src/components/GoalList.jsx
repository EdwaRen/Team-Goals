import React, { Component} from 'react';
import {goalRef} from '../firebase';

class GoalList extends Component {
  componentDidMount() {
    //finds goals in the database from goalRef
    goalRef.on('value', snap => {
      snap.forEach(goal => {
        let goalObject = goal.val();
        console.log('goalObject', goalObject);
      })
    })

  }

  render() {
    return (
      <div>Goal List</div>
    )
  }
}
export default GoalList;
