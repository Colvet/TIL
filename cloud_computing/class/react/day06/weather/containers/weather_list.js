import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather (cityData) { 
    
    const name = cityData.city.name;
    const country = cityData.city.country;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return(
    <tr>
        <th> {name} {country} </th>
        <th> <Chart data={temps} color = 'orange'/> </th>
        <th> <Chart data= {pressures} color = 'black' /> </th>
        <th> <Chart data= {humidities} color = 'blue' /> </th>
      </tr>
    )
  }

  render() {
    
    return (
      <table>
        <thead>
          <tr>
            <th> Name country </th>
            <th> temps </th>
            <th> pressures </th>
            <th> humidities </th>
          </tr>
          

        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}

        </tbody>
      </table>
    );
  }
}

// mapSrtateToProps funciton
function mapStateToProps(state) {
  return { weather: state.weather};
}
// connect mapping

export default connect(mapStateToProps)(WeatherList);