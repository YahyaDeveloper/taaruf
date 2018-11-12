import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ComponentProfilCalon from '../Profil/ComponentProfilCalon';

const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FFFFFF" }]} />
);
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: "#FFFFFF" }]} />
);

export default class Home extends React.Component {
  state = {
    index: 0,
    routes: [{ key: "first", title: "Ikhwan" }, { key: "second", title: "Akhwat" }]
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}

      />
    );
  }

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabbar: {
    backgroundColor: "#FFFFFF"
  },
  tab: {
    width: Dimensions.get("window").width*0.5
  },
  indicator: {
    backgroundColor: "#000"
  },
  label: {
    color: "#000",
    fontWeight: "400"
  }
});
