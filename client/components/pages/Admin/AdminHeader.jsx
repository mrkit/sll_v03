import React, { Component, Fragment } from 'react';

class AdminHeader extends Component {

  render() {
    const { handleLogout, loggedIn } = this.props;
    return (
      <header className='admin-header'>
        <h1>Admin</h1>
       {loggedIn ? <button onClick={handleLogout}>Logout</button> : null}
      </header>
    );
  }
}

export default AdminHeader;