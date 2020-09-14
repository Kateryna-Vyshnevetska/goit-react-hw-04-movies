import React from "react";
import Loader from "react-loader-spinner";

export class Spinner extends React.Component {
  render() {
    return (
      <Loader
        className="loader"
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={50000} //3 secs
      />
    );
  }
}
