const React = require('react');
const AnswerIndexItem = require('./answer_index_item');

const AnswerIndex = React.createClass({
  render(){
    return(
      <ul className="answer-index">
      {
        this.props.answers.map((answer)=>{
          return <AnswerIndexItem answer={answer} key={answer.id}/>;
        })
      }
      </ul>
    );
  }
});

module.exports = AnswerIndex;
