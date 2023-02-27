import React, { Component } from "react";
import "./main.css";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="">
          <div className="image-center responsive">
            <span className="image-title">
              Keeps us connected<span className="five-g-text">MobiHUB</span>
              <br />
            </span>
            <span className="image-body">
              Get the phone according to your needs.
            </span>
          </div>
        </div>

        <br />
        <Question title="Why only Mobihub" />
        <hr className="hr" />
        <Question title="What are its advantages?" />
        <hr className="hr" />
        <Question title="About the Company" id="about" />
        <hr className="hr" />
        <Question title="Expect us?" />
        <hr className="hr" />
      </div>
    );
  }
}
const Question = (props) => {
  return (
    <div
      className="q-block"
      style={{ backgroundColor: "#e9e4e1", width: "100%" }}
    >
      <div className="q-title" id={props?.id}>
        <p>{props.title}</p>
      </div>
      <div className="q-answer">
        <p>
          A: Mobile phone also commonly known as cell phones or hand phone is a
          portable device that was developed to overcome the difficulty faced of
          people, that was to talk with someone who was not present there. It
          was designed to receive or to make calls over a radio frequency .It
          comes with pre fitted speakers and mics that let us send our voice and
          receive it from the other side . The first handheld device was
          presented by John Mitchell and Martin Cooper of Motorola company in
          the year 1973. Since the day it was invented till now this device has
          become more advanced than anything else. Nowadays it’s called as smart
          phone , as it has become capable of doing a while lot of things.
        </p>
      </div>
    </div>
  );
};
export default Main;
