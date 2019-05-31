import React from "react";
import PropTypes from "prop-types";
import { Text, ScrollView, View, Image } from "react-native";
import CodeOfConduct from "../../components/CodeOfConduct";
import styles from "./styles";

const About = ({ allConducts }) => {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="center"
          style={styles.logo}
          source={require("../../assets/images/r10_logo.png")}
        />
      </View>

      <View style={styles.separator} />
      <Text style={styles.text}>
        R10 s a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date &amp; Revenue</Text>
      <Text style={styles.text}>
        The R10 conference will take place on Tuestday, June 27, 2017 in
        Vancouver,BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>
      <View style={styles.conductitem}>
        {allConducts.map(conduct => (
          <CodeOfConduct conduct={conduct} />
        ))}
      </View>
      <View style={styles.separator} />
      <Text style={styles.footer}>&copy; Red Academy 2019</Text>
    </ScrollView>
  );
};

About.propTypes = {
  allConducts: PropTypes.array.isRequired
};

export default About;
