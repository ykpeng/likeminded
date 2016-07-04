const React = require('react');

const TestResult = React.createClass({
  handleClick(){
    console.log("inside retake click");
    this.props.resetCurrIdx();
  },
  render(){
    return(
      <div>Inside Test Result
        <button onClick={this.handleClick}>Retake Test</button>
      </div>
    );
  }
});

module.exports = TestResult;
