import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class Terms extends Component {
  constructor() {
    super();
  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',
      opacity: "0.9",

      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      margin: 'auto',
      maxWidth: '100%',
      paddingBottom: "30px",

    }
    return (
      <div style ={mainDivStyle}>
        <p>Terms of use</p>

      <p>This Terms of Use explains the operation principle of Teamgoals.ca.</p>

      <p>On this website, you can encounter pages which may ask you to sign in, subscribe, enter your name or perform other actions to get access to personalized content.</p>

      <p>Using your Email Address</p>

      <p>When you enter your email or sign in through social networks, you agree to that your email address will be added to the subscription list for sending target news and special offers. You can unsubscribe at any time by clicking on the link at the end of any of emails received from us.</p>

      <p>Social Apps &amp; Permissions</p>

      <p>When you sign in through social networks, Teamgoals may ask you to grant permissions to read or perform some social actions.</p>

      <p>Teamgoals retrieves only the following information (according the Privacy Policy of this website):</p>

      <p>Person name<br />
      Email address<br />
      Teamgoals never collects other data and never publish anything in social networks from your behalf without your permissions.<br />
      </p>
            </div>

    )
  }


}

export default Terms;
