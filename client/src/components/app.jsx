import React from 'react';
import $ from 'jquery';
import Earnings from './earningsComp/earnings';
import Summary from './summaryComp/summary';
import styles from './../../dist/build/styles.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      exampleDataLoaded: false,
      companyName: '',
      companyEstimatedEarnings: [],
      companyActualEarnings: [],
      buySummary: '',
      sellSummary: '',
      ratings: []
    }
  }

  componentDidMount() {
    // for now, send a request to get fake data from server
    let id = this.props.pId;
    setTimeout(() => { 
      $.ajax({
        url: `http://localhost:3004/companies/${id}`,
        type: 'GET',
        contentType: 'application/json',
        success: (data) => {
          console.log(data);
          let earnings = JSON.parse(data.earnings);
          this.setState({
            exampleDataLoaded : true,
            companyName: data.name,
            companyEstimatedEarnings: earnings.estimated,
            companyActualEarnings: earnings.actual,
            buySummary: data.best_summary,
            sellSummary: data.sell_summary,
            ratings: JSON.parse(data.ratings)
          }, () => {console.log(this.state)});
        },
        error: () => {
          console.log('Failed to access the data base : ', error);
        }
    })}, 0);
  }

  render () {
    return (
      <div>
        <Summary 
          ratings={this.state.ratings}
          buySummary={this.state.buySummary}
          sellSummary={this.state.sellSummary}
        />
        <br />
        <Earnings 
          estimatedEarnings={this.state.companyEstimatedEarnings}
          actualEarnings={this.state.companyActualEarnings}
        />
      </div>);
  }
}

export default App;
