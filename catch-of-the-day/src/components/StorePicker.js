import React, { Fragment } from 'react'
import PropTypes from "prop-types"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this)
  // }
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault()
    // 2. Get the text form that input
    const storeName = this.myInput.current.value
    // 3. Change the page to /store/name-of-store
    this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <Fragment>
        <p>Fish!</p>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store →</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker