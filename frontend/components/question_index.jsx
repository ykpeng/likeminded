const React = require('react');
const QuestionStore = require('../stores/question_store');
const QuestionActions = require('../actions/question_actions');
const TestResult = require("./test_result");
const QuestionIndexItem = require('./question_index_item');

const QuestionIndex = React.createClass({
  getInitialState(){
    return ({ questions: [], currIdx: 0 });
  },

  componentDidMount(){
    this.listener = QuestionStore.addListener(this.handleChange);
    QuestionActions.fetchQuestions();
  },

  handleChange(){
    this.setState({ questions: QuestionStore.all() });
  },

  incrementCurrQuestion(){
    this.setState( { currIdx: this.state.currIdx + 1 });
  },

  resetCurrQuestion(){
    this.setState({ currIdx: 0 });
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    // if (this.state.currIdx >= this.state.questions.length){
    //   return (
    //     <div>
    //       <span>Your personality profile</span>
    //       <TestResult />
    //     </div>
    //   );
    // }
    return(
      <div>
        <span>Questions</span>
        <QuestionIndexItem questions={this.state.questions} currIdx={this.state.currIdx} incrementCurrIdx={this.incrementCurrIdx} resetCurrIdx={this.resetCurrIdx}/>
      </div>
    );
  }
})
module.exports = QuestionIndex;
