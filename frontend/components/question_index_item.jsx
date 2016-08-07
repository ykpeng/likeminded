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
      <div className="question">
        <h5 className="question-number">QUESTION {this.props.question.id} / 60</h5>
        <form onSubmit={this.handleSubmit} className="question-form">
          <h5>{this.props.question.content}</h5>
          <div className="answer_options">
            {radioButtons}
          </div>
          <input type="submit" value="ANSWER"/>
        </form>
      </div>
    )
  }
})
module.exports = QuestionIndexItem;
