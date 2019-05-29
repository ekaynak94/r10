import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import ScheduleList from "../ScheduleList";

const SessionList = ({ allSessions }) => {
  console.log(allSessions);
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

SessionList.propTypes = {
  allSessions: PropTypes.array
};

export default SessionList;
