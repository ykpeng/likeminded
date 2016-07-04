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
    this.setState({ answerChoice: e.target.value});
  },
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="radio" value="1" onClick={this.handleClick}/>Strongly Dislike<br/>
        <input type="radio" value="2" onClick={this.handleClick}/>Dislike<br/>
        <input type="radio" value="3" onClick={this.handleClick}/>Unsure<br/>
        <input type="radio" value="4" onClick={this.handleClick}/>Like<br/>
        <input type="radio" value="5" onClick={this.handleClick}/>Strongly Like<br/>
        <input type="submit" value="Answer"/>
      </form>
    )
  }
});

module.exports = AnswerEdit;
