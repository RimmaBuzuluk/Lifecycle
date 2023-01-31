import React from "react";

class Test1 extends React.Component {
  constructor(props) {
    console.clear();
    console.log("costructor");
    console.log(props);
    super();
    this.state = {
      s1: 0,
    };
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  };
  render() {
    console.log("render1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;
