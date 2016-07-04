const React = require('react');
const AnswerEdit = require('./answer_edit');

const ANSWER_MAPPING = {
  1: "Strongly Dislike",
  2: "Dislike",
  3: "Unsure",
  4: "Like",
  5: "Strongly Like"
};

const AnswerIndexItem = React.createClass({
  getInitialState(){
    return { editing: false };
  },
  handleClick(){
    this.setState({ editing: true });
  },
  closeForm(){
    this.setState({ editing: false});
  },
  render(){
    // console.log(this.props.answer);
    return(
      <div>
        <span>{this.props.answer.question.content}</span>

        {(this.state.editing) ?

          <AnswerEdit closeForm={this.closeForm} answer={this.props.answer}/> :

          <li>
            <p>{ANSWER_MAPPING[this.props.answer.answer_choice]}</p>
            <button onClick={this.handleClick}>Edit</button>
          </li>}
      </div>
    );
  }
});

module.exports = AnswerIndexItem;
