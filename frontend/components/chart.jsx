const React = require('react');
const RadarChart = require('../radar_chart');
const SessionStore = require('../stores/session_store');

const DIM_MAPPING = {
  1: "Realistic",
  2: "Investigative",
  3: "Artistic",
  4: "Social",
  5: "Enterprising",
  6: "Conventional"
};

const Chart = React.createClass({
  componentDidMount(){
    RadarChart.draw(".chart", this.getData());
  },

  getData(){
    console.log(SessionStore.currentUser().dim_scores);
    const curr_user_dim_scores = SessionStore.currentUser().dim_scores;
    const otherUser = [];
    const currUser = [];
    for (let i = 1; i < 7; i++) {
      otherUser.push({axis: DIM_MAPPING[i], value: this.props.dim_scores[i] / 50 })
      currUser.push({axis: DIM_MAPPING[i], value: curr_user_dim_scores[i] / 50 })
    };
    const data = [otherUser, currUser];
    return data;
  },

  render(){
    return(
      <div className="chart"></div>
    );
  }
});

module.exports = Chart;
