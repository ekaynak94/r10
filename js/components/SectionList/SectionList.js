import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const SectionList = ({ allSessions }) => {
  console.log(allSessions);
  return (
    <View>
      <FlatList
        data={allSessions}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
};

SectionList.propTypes = {
  allSessions: PropTypes.array
};

export default SectionList;
