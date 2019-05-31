import React, { Component } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class CodeOfConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const isOpen = !this.state.isOpen;
    this.setState({
      isOpen
    });
  }

  render() {
    const { conduct } = this.props;
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={this.toggle}>
          <Text style={styles.itemTitle}>
            {this.state.isOpen ? "-" : "+"} {conduct.title}
          </Text>
        </TouchableOpacity>
        {this.state.isOpen && (
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
