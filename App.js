import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_KEY="0aa59d0d4463bd5a8d382280874cd5fe";

export default class App extends React.Component{
  state = {
    isLoading : true
  };
  getWeather= async(latitude,longtitude) => {
    const {data:{
        main: {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${API_KEY}&units=metric`
      );
    this.setState({isLoading:false, 
      condition:weather[0].main, 
      temp
    });
  }
  getLocation = async() => {
    try {
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
  
    }catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount(){
    this.getLocation()
    }
  
  render(){
    const {isLoading,temp,condition} = this.state;
    return  (isLoading) ?<Loading/> : <Weather temp={temp} condition={condition}/>;
  }
}
