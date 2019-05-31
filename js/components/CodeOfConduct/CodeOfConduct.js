import React, { Component } from "react";
import {
  Platform,
  LayoutAnimation,
  UIManager,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const { isOpen } = this.state;
    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { conduct } = this.props;
    const { isOpen } = this.state;
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <Text style={styles.itemTitle}>
            {isOpen ? "-" : "+"} {conduct.title}
          </Text>
        </TouchableOpacity>
        {isOpen && (
          <Text style={styles.itemDescription}>{conduct.description}</Text>
        )}
      </View>
    );
  }
}

CodeOfConduct.propTypes = {
  conduct: PropTypes.object.isRequired
};

export default CodeOfConduct;
