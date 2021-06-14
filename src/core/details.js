import React, { Component } from "react";
import Base from "./base";

class details extends Component {
  state = {
    data: {
      genre: "",
      temp: this.props.location.state.movie.Genre,
    },
  };

  updategenre() {
    console.log(this.state.data.genre);
    var data = { ...this.state.data };
    data.temp = this.state.data.genre;
    this.setState({ data });
  }
  handlechange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };
  render() {
    return (
      <Base title="Details">
        <div>
          <div class="card" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src="https://summer.yale.edu/sites/default/files/drama_30.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title" style={{ color: "black" }}>
                {" "}
                Movie Title: {this.props.location.state.movie.Title}
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" style={{ color: "black" }}>
                Genre:{this.state.data.temp}
              </li>
              <li class="list-group-item" style={{ color: "black" }}>
                Rating:{this.props.location.state.movie.Rating}
              </li>
              <select
                name="genre"
                id="abc"
                onChange={this.handlechange}
                style={{ width: "200px", marginLeft: "20px" }}
              >
                <option value="Select option">Select option</option>
                <option value="Action" style={{ fontSize: "15px" }}>
                  Action
                </option>
                <option value="Adventure" style={{ fontSize: "15px" }}>
                  Adventure
                </option>
                <option value="Biography" style={{ fontSize: "15px" }}>
                  Biography
                </option>
                <option value="Drama" style={{ fontSize: "15px" }}>
                  Drama
                </option>
                <option value="Animation" style={{ fontSize: "15px" }}>
                  Animation
                </option>
              </select>
              <li class="list-group-item">
                <button
                  onClick={() => {
                    this.updategenre();
                  }}
                  className="btn-primary"
                >
                  Update Genre
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Base>
    );
  }
}
export default details;
