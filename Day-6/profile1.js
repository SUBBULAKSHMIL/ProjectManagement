import React from 'react';
import { Provider } from 'react-redux';
import store from '../Components/store';
import UserProfilePage from '../Components/userprofile';


class Myprofile extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserProfilePage />
        </div>
      </Provider>
    );
  }
}

export default Myprofile;