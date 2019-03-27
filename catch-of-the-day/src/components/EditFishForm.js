import React, { Component } from 'react'
import PropTypes from "prop-types";

class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    index: PropTypes.string,
    updatedFish: PropTypes.func
  };
  handleChange = event => {
    const updatedFish ={
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    }
    this.props.updatedFish(this.props.index, updatedFish);
  }
  render() {
    return (
      <div className="fish-edit">
        <input name="name" onChange={this.handleChange} value={this.props.fish.name} type="text" placeholder="Name" ></input>
        <input name="price" onChange={this.handleChange} value={this.props.fish.price} type="text" placeholder="Price" ></input>
        <select name="status" onChange={this.handleChange} value={this.props.fish.status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc} placeholder="Desc" ></textarea>
        <input name="image" onChange={this.handleChange} value={this.props.fish.image} type="text" placeholder="Image" ></input>
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;