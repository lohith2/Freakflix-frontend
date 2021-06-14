import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./styles.css";
import Base from "./base";

class Home extends Component {
  state = {
    data: null,
  };

  render() {
    return (
      <Base title="Freakflix" description="Home of entertainment">
        <div class="card">
          <img
            class="card-img-top"
            style={{
              width: "282px",
              marginleft: "50px",
              height: "180px",
              marginTop: "20px",
            }}
            src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png-image_3669645.jpg"
          ></img>
          <div class="card-body">
            <i style={{ color: "black" }}>
              <b>
                "A one stop destination for all the information regarding
                movies"
              </b>
            </i>
          </div>
        </div>
      </Base>
    );
  }
}
export default Home;
