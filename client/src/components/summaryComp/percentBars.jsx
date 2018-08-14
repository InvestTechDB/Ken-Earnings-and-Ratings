import React, { Component } from 'react';
import PercentBar from './percentBar';
import styles from './../../../dist/build/styles.min.css';

class PercentBars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: ['Buy', 'Hold', 'Sell'],
      counts: [],
      trigger: false
    }
  }

  componentDidUpdate () {
    let buyCount = this.props.ratings.buy;

    let holdCount = this.props.ratings.hold;

    let sellCount = this.props.ratings.sell;

    let length = this.props.ratings.buy + this.props.ratings.sell + this.props.ratings.hold;

    if (this.state.trigger === false) {
      this.setState({ counts: [buyCount, holdCount, sellCount], total: length, trigger: true });
    };
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div className={styles.bars}>
        {this.state.suggestions.map((suggestion, index) => {
          return (
            <PercentBar
              suggestion={suggestion}
              count={this.state.counts[index]}
              total={this.state.total}
            />
          );
        })}
      </div>
    )
  }
}

export default PercentBars;