import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class AdminHeader extends Component {

  render() {
    const { handleLogout, loggedIn } = this.props;
    return (
      <header className='admin-header'>
        <h1>Admin</h1>
        <Link to='/'>Home</Link>
       {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
      </header>
    );
  }
}

export default AdminHeader;