const React = require('react');
const AnswerActions = require('../actions/answer_actions');

const QuestionIndexItem = React.createClass({
  getInitialState(){
    return { answerChoice: 0 };
  },

  handleClick(e){
    this.setState({ answerChoice: parseInt(e.target.value) });
  },

  handleSubmit(e){
    e.preventDefault();
    const formData = { question_id: this.props.question.id, answer_choice: this.state.answerChoice };
    AnswerActions.createAnswer(formData);
    this.props.incrementCurrIdx();
    this.setState({ answerChoice: 0 });
  },

  render(){
    let answers = ["Strongly Dislike", "Dislike", "Unsure", "Like", "Strongly Like"];
    let radioButtons = answers.map((answer, idx) => {
      if (idx + 1 === this.state.answerChoice) {
        return (<div className="answer-option" key={idx}><input type="radio" value={idx + 1} checked="checked" onClick={this.handleClick}/> {answer}<br/></div>);
      } else {
        return (<div className="answer-option" key={idx}><input type="radio" value={idx + 1} onClick={this.handleClick}/> {answer}<br/></div>);
      }
    });
    return(
      <form onSubmit={this.handleSubmit} className="question-form">
        <p>Question {this.props.question.id}/60: </p><br/>
        <h4>{this.props.question.content}</h4><br/>
        <div className="answer_options">
          {radioButtons}
        </div>
        <input type="submit" value="ANSWER"/>
      </form>
    )
  }
})
module.exports = QuestionIndexItem;
