const React = require('react');
const AnswerActions = require('../actions/answer_actions');
const TestResult = require('../components/test_result');

const QuestionIndexItem = React.createClass({
  getInitialState(){
    return { answerChoice: 0 };
  },

  handleClick(e){
    this.setState({ answer_choice: e.target.value });
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = { question_id: this.props.question.id, answer_choice: this.state.answerChoice };
    AnswerActions.updateAnswer(formData);
    this.props.incrementCurrQuestion();
  },

  render(){
    if (this.props.currIdx === this.props.questions.length) {
      return (<TestResult resetCurrQuestion={this.props.resetCurrQuestion}/>);
    };
    return(
      <form>
        <span>{this.props.questions[this.props.currIdx].content}</span>
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
module.exports = QuestionIndexItem;
