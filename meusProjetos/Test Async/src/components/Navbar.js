import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid" id="navbar">
          <a className="navbar-brand" href="google.com">
            <img
              src="https://iconarchive.com/download/i88140/icons8/ios7/Gaming-Cards.ico"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top"
            />
            <p>
              Super Trunfo Trybe
            </p>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
