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
    return(
      <div className="answer">
        <h5>{this.props.answer.question.content}</h5>

        {(this.state.editing) ?

          <AnswerEdit closeForm={this.closeForm} answer={this.props.answer}/> :

          <li>
            <p className="answered-answer"><i className="fa fa-check check-icon" aria-hidden="true"></i> {ANSWER_MAPPING[this.props.answer.answer_choice]}</p>
            <button className="reanswer" onClick={this.handleClick}>RE-ANSWER</button>
          </li>}
      </div>
    );
  }
});

module.exports = AnswerIndexItem;
