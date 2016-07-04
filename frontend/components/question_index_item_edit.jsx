const React = require('react');
const AnswerActions = require('../actions/answer_actions');
const TestResult = require('../components/test_result');

const QuestionIndexItemEdit = React.createClass({
  getInitialState(){
    console.log("inside get initial state");
    // console.log(this.props.answers);
    // console.log(this.props.currIdx);
    return { answerChoice: this.props.answers[this.props.currIdx].answer_choice };
  },

  componentDidMount(){

  },

  handleClick(e){
    this.setState({ answerChoice: e.target.value });
  },

  handleSubmit(e){
    // e.preventDefault();
    const formData = { id: this.props.answers[this.props.currIdx].id,
                       question_id: this.props.answers[this.props.currIdx].question_id, answer_choice: this.state.answerChoice };
    AnswerActions.updateAnswer(formData);
    this.props.incrementCurrIdx();
  },

  render(){
    if (this.props.currIdx === this.props.questions.length) {
      return (<TestResult resetCurrIdx={this.props.resetCurrIdx}/>);
    };
    return(
      <form onSubmit={this.handleSubmit}>
        <span>Question {this.props.currIdx + 1}/{this.props.questions.length}</span><br/>
        <span>{this.props.questions[this.props.currIdx].content}</span><br/>
        <input type="radio" value="1" onClick={this.handleClick}/>Strongly Dislike<br/>
        <input type="radio" value="2" onClick={this.handleClick}/>Dislike<br/>
        <input type="radio" value="3" onClick={this.handleClick}/>Unsure<br/>
        <input type="radio" value="4" onClick={this.handleClick}/>Like<br/>
        <input type="radio" value="5" onClick={this.handleClick}/>Strongly Like<br/>
        <input type="submit" value="Answer"/>
      </form>
    )
  }
})
module.exports = QuestionIndexItemEdit;
