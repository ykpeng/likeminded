const React = require('react');
const QuestionStore = require('../stores/question_store');
const QuestionActions = require('../actions/question_actions');
const QuestionIndexItem = require('./question_index_item');
const SessionStore = require('../stores/session_store');
const UserStore = require('../stores/user_store');

const AnswerStore = require('../stores/answer_store');
const AnswerActions = require('../actions/answer_actions');
const AnswerIndex = require('./answer_index');

const QuestionIndex = React.createClass({
  getInitialState(){
    return ({ questions: QuestionStore.all(), answers: AnswerStore.all(), currIdx: 0 });
  },

  componentDidMount(){
    this.questionListener = QuestionStore.addListener(this.handleQuestionChange);
    QuestionActions.fetchQuestions();

    this.answerListener = AnswerStore.addListener(this.handleAnswerChange);
    AnswerActions.fetchAnswers();
  },

  handleQuestionChange(){
    this.setState({ questions: QuestionStore.all() });
  },

  handleAnswerChange(){
    this.setState({ answers: AnswerStore.all() });
    let currIdx = AnswerStore.all().length;
    this.setState({currIdx: currIdx});
  },

  incrementCurrIdx(){
    let newIdx = this.state.currIdx + 1;
    this.setState( { currIdx: newIdx });
  },

  componentWillUnmount(){
    this.questionListener.remove();
    this.answerListener.remove();
  },

  render(){
    if (this.state.questions.length === 0) {
      return <div></div>;
    }
    return(
      <div className="content">
        <div className="questions-main">
          <div className="questions-instructions">
            Read each question carefully and decide how you would feel about doing each type of work.Try not to think about if you have enough education or training to do the work, or how much money you would make doing the work. Just think about if you would like or dislike doing the work.
          </div>
          <div>
            {(this.state.currIdx === this.state.questions.length) ?
              <h5>You've completed the personality test!</h5> :
              <QuestionIndexItem question={this.state.questions[this.state.currIdx]} incrementCurrIdx={this.incrementCurrIdx} key={this.state.currIdx}/> }
          </div>
          <div className="answers-heading">
            <h4>ANSWERED QUESTIONS</h4>
          </div>
          <AnswerIndex answers={this.state.answers}/>
        </div>
      </div>
    );
  }
})
module.exports = QuestionIndex;
