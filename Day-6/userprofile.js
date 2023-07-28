import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../Components/actions';
import '../Style/profile1.css'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class UserProfilePage extends React.Component {
  componentDidMount() {
    const user = {
      username: 'SubbulakshmiL',
      email: 'subbu@gmail.com',
      bio: 'A passionate developer.',
      position:'Admin',
      dob:'28.02.2003',
      num:'8098884765'
    };

    this.props.setUser(user);
  }

  render() {
    const { username, email, position,dob,num } = this.props.user;

    return (
      <div className='profile'>
        <div className='head1'>
        <h1>User Profile</h1>
        </div>
        <div className='head2'>
        </div>
        <div className='head3'>
            <ul>
            <li>Username :  {username}</li>
            <li>Email :  {email}</li>
            <li>Position :  {position}</li>
            <li>Date of Birth :  {dob}</li>
            <li>Mobile Number :  {num}</li>
            <Link to='/update' style={{textAlign:'center'}}>Update profile</Link>

            <Link to='/Sidebar'>
                    <button style={{float:'right', width:'20%'}}>Back</button><br/>
            </Link>
            </ul> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);