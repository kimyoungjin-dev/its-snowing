// https://api.openweathermap.org/data/2.5/weather?lat=37.367717500731544&lon=126.93501768887215&appid=1cce20274897538f27f72a370b9bb045units=metric
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "1cce20274897538f27f72a370b9bb045";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    console.log(latitude);
    //latitude와 longitude인자들을 넘겨준다.
    const { data } = await axios.get(
      //axios는 "data"라고불리는 정보를 우리에게 준다.
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //위치정보수락/거절 메시지를 보냄
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync(); //사용자의 위치정보를 뽑아서 데이터로 표현해준다.

      this.getWeather(latitude, longitude); //getWeatherd을 호출해준다.
      this.setState({ isLoading: false }); //위치정보를 가지고오면,원래는 true가 되어야하는데 수동적으로 null로표현해준다.
    } catch (error) {
      Alert.alert("Can't find you.", "So sad"); //Alert.alert("에러메시지")
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null; //true 라면 Loading의 화면을 보여준다. 하지만 false라면 화면을 보여주지 않는다(null)
  }
}
