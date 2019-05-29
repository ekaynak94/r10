import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import SessionList from "../SessionList";

const SectionList = ({ allSessions }) => {
  console.log(allSessions);
  return (
    <View>
      <FlatList
        data={allSessions}
        renderItem={({ item }) => (
          <View>
            <Text>{moment(item.title).format("LT")}</Text>
            <SessionList sessions={item.data} />
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
