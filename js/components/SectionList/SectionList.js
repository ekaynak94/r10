import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import ScheduleList from "../ScheduleList";

const SectionList = ({ allSessions }) => {
  return (
    <View>
      <FlatList
        data={allSessions}
        renderItem={({ item }) => (
          <View>
            <Text>{moment(item.title).format("LT")}</Text>
            <ScheduleList sessions={item.data} />
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
