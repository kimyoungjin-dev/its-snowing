import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

const API_KEY = "d65dac0a0139c95b2362e104cecfd7a6";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { longitude, latitude }, //위도와, 경도의 값을 가지고옴
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false }); //위도와 경도의 값을 가지고왔을때에는 isloading 을 "false"로 설정
      //send API
    } catch (error) {
      Alert.alert("cant find you");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state; //상태값을 다시정의해준다.
    return isLoading ? <Loading /> : null;
  }
}
