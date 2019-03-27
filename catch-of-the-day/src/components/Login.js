import React, { Component } from 'react'
import PropTypes from "prop-types"

class Login extends Component {
  render() {
    return (
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button
          className="github"
          onClick={() => {this.props.authenticate('Github')}}
        >Log In With GitHub</button>
        <button
          className="facebook"
          onClick={() => {this.props.authenticate('Facebook')}}
        >Log In With Facebook</button>
      </nav>
    )
  }
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;