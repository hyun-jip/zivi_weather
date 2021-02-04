import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import Alert from "react-native";

export default class extends React.Component {
state = {
  isLoading : true;
}

  getLocation = async () => {
    try{

      await Location.getPermissionsAsync();
      const {coord : {latitude, logitude} } = await Location.getCurrentPositionAsync();
      this.state({isLoading: false});
    }
    catch(errror){
      Alert.alert("Can't find you","So sad");
    }

  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
