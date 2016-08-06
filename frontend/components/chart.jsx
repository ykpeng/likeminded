const React = require('react');
const RadarChart = require('../radar_chart');

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
    const data = [[]];
    for (let i = 1; i < 7; i++) {
      data[0].push({axis: DIM_MAPPING[i], value: this.props.dim_scores[i] / 50 })
    }
    // for (let i = 1; i < 7; i++) {
    //   data[1].push({axis: DIM_MAPPING[i], value: this.props.curr_user_dim_scores[i]})
    // }
    return data;
  },

  render(){
    return(
      <div className="chart"></div>
    );
  }
});

module.exports = Chart;
