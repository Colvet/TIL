import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class CoinList extends Component {
  renderCoin (coinData) { 
    const high = coinData.map(coin => coin.high);
    const low = coinData.map(coin => coin.low);
    console.log(coinData);
    return(
      <tr>
        <th> <Chart data= {high} /> <Chart data= {low} /> </th>
      </tr>
    )
  }

  render() {
    
    return (
      <table>
        <thead>
          <tr>
            <th> Coin Chart </th>
          </tr>
          

        </thead>
        <tbody>
          {this.props.coin.map(this.renderCoin)}

        </tbody>
      </table>
    );
  }
}

// mapSrtateToProps funciton
function mapStateToProps(state) {
  return { coin: state.coin};
}
// connect mapping

export default connect(mapStateToProps)(CoinList);