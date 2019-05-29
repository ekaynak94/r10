import React from "react";
import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const SessionList = ({ sessions }) => {
  console.log(sessions);
  return (
    <View>
      <FlatList
        data={sessions}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

SessionList.propTypes = {
  sessions: PropTypes.array
};

export default SessionList;
