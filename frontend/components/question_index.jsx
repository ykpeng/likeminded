const React = require('react');
const QuestionStore = require('../stores/question_store');
const QuestionActions = require('../actions/question_actions');
const TestResult = require("./test_result");
const QuestionIndexItem = require('./question_index_item');
// const QuestionIndexItemEdit = require('./question_index_item_edit');
const SessionStore = require('../stores/session_store');
const UserStore = require('../stores/user_store');

const AnswerStore = require('../stores/answer_store');
const AnswerActions = require('../actions/answer_actions');
const AnswerIndex = require('./answer_index');

const QuestionIndex = React.createClass({
  getInitialState(){
    console.log("inside get initial state");
    return ({ questions: QuestionStore.all(), answers: AnswerStore.all(), currIdx: 0 });
  },

  componentDidMount(){
    console.log("inside component did mount");
    this.questionListener = QuestionStore.addListener(this.handleQuestionChange);
    QuestionActions.fetchQuestions();

    this.answerListener = AnswerStore.addListener(this.handleAnswerChange);
    AnswerActions.fetchAnswers();
  },

  handleQuestionChange(){
    console.log("inside question change");
    this.setState({ questions: QuestionStore.all() });
    // console.log(this.state.questions);
  },

  handleAnswerChange(){
    console.log("inside answer change");
    this.setState({ answers: AnswerStore.all() });
    let currIdx = AnswerStore.all().length;
    this.setState({currIdx: currIdx});
    // console.log(this.state.answers);
    // console.log(this.state.currIdx);
    // const sorted_answers = AnswerStore.all().sort((a, b)=>{
    //   return ( (a.updated_at < b.updated_at) ? -1 : ((a.updated_at > b.updated_at) ? 1 : 0) );
    // });
    // this.setState({ currIdx: currIdx});
    // if (sorted_answers.length === 60) {
    //   this.setState({ create: false });
    // }
    // console.log(sorted_answers[sorted_answers.length - 1]);
  },

  incrementCurrIdx(){
    console.log("inside increment");
    let newIdx = this.state.currIdx + 1;
    this.setState( { currIdx: newIdx });
  },

  // resetCurrIdx(){
  //   this.setState({ currIdx: 0 });
  //   this.setState({ create: false });
  //   console.log("inside reset curridx");
  // },

  componentWillUnmount(){
    console.log("inside component will unmount");
    this.questionListener.remove();
    this.answerListener.remove();
  },

  render(){
    console.log("inside render");
    // console.log(this.state.answers);
    if (this.state.questions.length === 0) {
      return <div></div>;
    }
    return(
      <div className="content">
        <div className="questions-main">
          <div className="questions">
            <p>Read each question carefully and decide how you would fell about doing each type of work.Try not to think about if you have enough education or training to do the work; or how much money you would make doing the work. Just think about if you would like or dislike doing the work</p>

            {(this.state.currIdx === this.state.questions.length) ?
              <span>You've completed the personality test</span> :
              <QuestionIndexItem question={this.state.questions[this.state.currIdx]} incrementCurrIdx={this.incrementCurrIdx} /> }

          </div>
          <div className="answers">
            <AnswerIndex answers={this.state.answers}/>
          </div>
        </div>
      </div>
    );
  }
})
module.exports = QuestionIndex;
