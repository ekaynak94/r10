import React from "react";
import PropTypes from "prop-types";
import { Text, ScrollView, View } from "react-native";
import CodeOfConduct from "../../components/CodeOfConduct";
import styles from "./styles";

const About = ({ allConducts }) => {
  return (
    <ScrollView>
      <Text>&lt;R10&gt;</Text>
      <Text>
        R10 s a conference that focuses on just about any topic related to dev.
      </Text>
      <Text> Date &amp; Revenue</Text>
      <Text>
        The R10 conference will take place on Tuestday, June 27, 2017 in
        Vancouver,BC.
      </Text>
      <Text>Code of Conduct</Text>
      {allConducts.map(conduct => (
        <CodeOfConduct key={conduct.id} conduct={conduct} />
      ))}

      <Text>&copy; Red Academy 2019</Text>
    </ScrollView>
  );
};

About.propTypes = {
  allConducts: PropTypes.array
};

export default About;
