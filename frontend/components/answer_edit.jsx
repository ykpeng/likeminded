const React = require('react');
const AnswerActions = require('../actions/answer_actions');

const AnswerEdit = React.createClass({
  getInitialState(){
    return { answerChoice: this.props.answer.answer_choice};
  },
  handleSubmit(e){
    e.preventDefault();
    const formData = {
      id: this.props.answer.id,
      question_id: this.props.answer.question_id,
      answer_choice: this.state.answerChoice
    }
    AnswerActions.updateAnswer(formData);
    this.props.closeForm();
  },
  handleClick(e){
    this.setState({ answerChoice: parseInt(e.target.value)});
  },
  render(){
    let answers = ["Strongly Dislike", "Dislike", "Unsure", "Like", "Strongly Like"];
    let radioButtons = answers.map((answer, idx) => {
      if (idx + 1 === this.state.answerChoice) {
        return (<div className="answer-option"><input type="radio" value={idx + 1} checked="checked" onClick={this.handleClick}/> {answer}<br/></div>);
      } else {
        return (<div className="answer-option"><input type="radio" value={idx + 1} onClick={this.handleClick}/> {answer}<br/></div>);
      }
    });
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="answer-options">
        {radioButtons}
        </div>
        <input type="submit" value="ANSWER"/>
      </form>
    )
  }
});

module.exports = AnswerEdit;
