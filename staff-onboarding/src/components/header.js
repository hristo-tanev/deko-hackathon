import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render (){
    return (
        <div className="header">
            <ul>
              <Link to='/'>| all |</Link>
              <Link to='/new'>| new |</Link>
              <Link to='/show'>| show |</Link>
              {this.props.children}
            </ul>
          <hr />
        </div>
      )
  }
}

export default Header;
