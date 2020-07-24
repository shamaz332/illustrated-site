import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import bg from "../bg/bg.svg";
export default class HeaderComponent extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <img className="responsive-img" src={bg} alt="bg"/>
        </div>
        <div className="col s12 m6">
          <h4 className="font">
            <b>Find your</b>
          </h4>
          <h1 className="title purple-text text-darken-4">
            Perfect
            <u>
              <span className="teal-text text-accent-3 i-line">Match</span>
            </u>{" "}
          </h1>

          <h6 className="font">Find Your Muslim Life Partner</h6>
          <p class="center-align">
            <a
              href="/"
              className="btn btn-header white-text text-darken-4 teal accent-3 modal-trigger center"
              data-target="modal1"
            >
              View Singles
            </a>
          </p>
        </div>

        <div>
          <div
            ref={(Modal) => {
              this.Modal = Modal;
            }}
            id="modal1"
            className="modal"
          >
            <div className="modal-content">
              <h4 className="font">The Offer Is Coming Soon!</h4>
              <p className="para">
                Thanks For You Concern, but we're under development!
              </p>
            </div>
            <div className="modal-footer">
              <a
                href="/"
                className="btn btn-header modal-close white-text teal accent-3"
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
