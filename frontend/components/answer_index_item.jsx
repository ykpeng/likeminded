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
      <div className="answer">
        <h4>{this.props.answer.question.content}</h4>

        {(this.state.editing) ?

          <AnswerEdit closeForm={this.closeForm} answer={this.props.answer}/> :

          <li>
            <p className="answered-answer"><i className="fa fa-check check-icon" aria-hidden="true"></i> {ANSWER_MAPPING[this.props.answer.answer_choice]}</p>
            <button onClick={this.handleClick}>RE-ANSWER</button>
          </li>}
      </div>
    );
  }
});

module.exports = AnswerIndexItem;
