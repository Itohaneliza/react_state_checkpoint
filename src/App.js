import React, { Component } from "react";
import "./App.css";
import image from "./IMG-20211218-WA0006.jpg";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Julius Elizabeth",
        bio: "A result oriented individual creating solutions to real life problems.",
        imgSrc: image,
        profession: "Software Developer",
      },
      show: true,
      timeInterval: new Date(),
    };
  }

  componentDidMount() {
    // Capture the moment when the component was mounted
    this.setState({
      timeInterval: new Date(),
    });
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="app">
        <h1>My Profile</h1>
        <button onClick={this.toggleProfile}>
          {show ? "Hide Profile" : "Seek Profile"}
        </button>

        {show && (
          <div className="card">
            <h2>{fullName}</h2>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
            <img src={imgSrc} alt={fullName} />
          </div>
        )}

        <p>Time since mount: {timeInterval.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
