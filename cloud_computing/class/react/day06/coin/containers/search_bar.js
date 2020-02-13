import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCoin } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coin : 'USDT_TRX'
    };

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      coin: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchCoin(this.state.coin);
    // console.log(this.state.coin);
    this.setState({
      coin: 'USDT_TRX'
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <select value={this.state.value} onChange = {this.onChange}>
          <option value = "USDT_TRX"> USDT_TRX </option>
          <option value = "USDT_ETH"> USDT_ETH </option>
          <option value = "BTC_ARDR"> BTC_ARDR </option>
          <option value = "BTC_BTS"> BTC_BTS </option>
        </select>
          <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    );
  }
}

// action과 연결시켜 주기위한 함수
// mapDispatchToProps function
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchCoin}, dispatch);

}

// connect mapping => 첫번째괄호는 만들고자 하는 기능의 함수, 두번째괄호는 컴포넌트 이름
// 첫번째 괄호의 첫번째 mapStateToProps이지만 현재 없으니까 null
// 두번째는 만들고자 하는 기능의 함수
export default connect(null, mapDispatchToProps)(SearchBar);
