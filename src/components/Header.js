import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img
            className="img-logo"
            src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png"
          />
        </div>
        <div className="header-right">
          <a>Login</a>
        </div>
      </div>
    );
  }
}
export default Header;
