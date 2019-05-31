import React, { Component } from "react";
import {
  Platform,
  LayoutAnimation,
  UIManager,
  Animated,
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
      isOpen: false,
      rotate: new Animated.Value(0)
    };
  }

  toggle() {
    const { isOpen } = this.state;
    const animation = Animated.timing(this.state.rotate, {
      toValue: 1,
      duration: 1000
    });
    animation.start(animation => {
      if (animation.finished) {
        this.setState({ rotate: new Animated.Value(0) });
      }
    });
    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { conduct } = this.props;
    const { isOpen, rotate } = this.state;
    const deg = rotate.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });
    const animatedStyles = {
      transform: [{ rotate: deg }],
      marginRight: 12
    };
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <View style={styles.itemTitleContainer}>
            <Animated.Text style={[styles.itemTitle, animatedStyles]}>
              {isOpen ? "-" : "+"}
            </Animated.Text>
            <Text style={styles.itemTitle}>{conduct.title}</Text>
          </View>
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
