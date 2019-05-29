import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ScheduleList = ({ sessions }) => {
  console.log(sessions);
  return (
    <View>
      <FlatList
        data={sessions}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

ScheduleList.propTypes = {
  sessions: PropTypes.array
};

export default ScheduleList;
