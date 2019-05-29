import React from "react";
import { FlatList, View, Text, TouchableHighlight } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

const ScheduleList = ({ sessions, navigation }) => {
  return (
    <View>
      <FlatList
        data={sessions}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor="#EEEFFF"
            onPress={() => {
              navigation.navigate("Session", {
                session: item
              });
            }}
          >
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

ScheduleList.propTypes = {
  sessions: PropTypes.array
};

export default withNavigation(ScheduleList);
