import React, { PureComponent } from 'react';
import profileStyle from './Profile.module.css';

export class Profile extends PureComponent {
  render() {
    return (
      <div>
        <div className={profileStyle.section}>profile section</div>
      </div>
    );
  }
}

export default Profile;
