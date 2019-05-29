import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import ScheduleList from "../ScheduleList";

const SessionList = ({ allSessions }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item, index, section }) => (
          <ScheduleList sessions={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{moment(title).format("LT")}</Text>
        )}
        sections={allSessions}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
};

SessionList.propTypes = {
  allSessions: PropTypes.array
};

export default SessionList;
