import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ComponentProfilCalon from '../Profil/ComponentProfilCalon';
import ComponentProfilWali from '../Profil/ComponentProfilWali';
import ComponentProfilPenjual from '../Profil/ComponentProfilPenjual';

const FirstRoute = () => (
  <ComponentProfilCalon/>
);
const SecondRoute = () => (
  <ComponentProfilWali/>
);
const ThirdRoute = () => (
  <ComponentProfilPenjual/>
);

export default class Profil extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Calon" }, 
      { key: "second", title: "Wali" },
      { key: "third", title: "Penjual"}
    ]
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third:ThirdRoute
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
    width: Dimensions.get("window").width*0.333
  },
  indicator: {
    backgroundColor: "#000"
  },
  label: {
    color: "#000",
    fontWeight: "400"
  }
});
