import React, { Component } from "react";
import { Link } from "react-router-dom";
import Base from "./base";
import axios from "axios";

class action extends Component {
  state = {
    data: null,
  };
  loaddata = async () => {
    const data = { ...this.state.data };

    const data1 = await axios.post("https://freakflixx.herokuapp.com/getmovies", {
      gener: "Action",
    });

    this.setState({ data: data1.data });
    console.log(this.state.data);
  };
  componentDidMount() {
    this.loaddata();
  }
  render() {
    return (
      <Base title="Action" description="Cant be missed">
        <div class="col md-2 sm-1"></div>
        {this.state.data ? (
          <div>
            <div className="col-md-3">
              {this.state.data.map((movie) => (
                <div
                  className="card"
                  style={{ width: "250px", marginTop: "10px" }}
                >
                  <ul class="list-group">
                    <li class="list-group-item" style={{ color: "black" }}>
                      {movie.Title}
                    </li>
                    <div style={{ width: "200px" }}>
                      <Link
                        className="nav-link Active list-group-item list-group-item-action btn"
                        to={{
                          pathname: "/details",
                          state: {
                            movie: movie,
                          },
                        }}
                        style={{ color: "#60a86e" }}
                      >
                        View details
                      </Link>
                    </div>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div
              class="spinner-border text-primary"
              style={{ marginLeft: "120px" }}
              role="status"
            ></div>
          </div>
        )}
      </Base>
    );
  }
}
export default action;
