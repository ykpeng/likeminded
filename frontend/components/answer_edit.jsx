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

  handleCancel(e) {
    e.preventDefault();
    this.props.closeForm();
  },

  render(){
    let answers = ["Strongly Dislike", "Dislike", "Unsure", "Like", "Strongly Like"];
    let radioButtons = answers.map((answer, idx) => {
      if (idx + 1 === this.state.answerChoice) {
        return (<div className="answer-option" key={idx + 1}><input type="radio" value={idx + 1} checked="checked" onClick={this.handleClick}/> {answer}<br/></div>);
      } else {
        return (<div className="answer-option" key={idx + 1}><input type="radio" value={idx + 1} onClick={this.handleClick}/> {answer}<br/></div>);
      }
    });
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="answer-options">
        {radioButtons}
        </div>
        <input type="submit" value="ANSWER"/>
        <button className="cancel" onClick={this.handleCancel}>CANCEL</button>
      </form>
    )
  }
});

module.exports = AnswerEdit;
