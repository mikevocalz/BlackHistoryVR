import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AmbientLight,
  asset
} from "react-360";
import Entity from "Entity";

export default class BlackHistory360 extends Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={0.4}
          style={{
            color: "white",
            transform: [
              {
                translate: [0, 0, 0]
              }
            ]
          }}
        />
        <Entity
          style={{
            transform: [{ translate: [0, 0, 0] }, { scale: 1 }]
          }}
          source={{
            obj: asset("Rooms.obj")
            // mtl: asset("mousepad.mtl")
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  }
});

AppRegistry.registerComponent("BlackHistory360", () => BlackHistory360);
