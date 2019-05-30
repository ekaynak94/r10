import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import SessionListItem from "../SessionListItem";
import { formatSessionData } from "../../helpers";

const SessionList = ({ allSessions, faveIds }) => {
  const allSections = formatSessionData(allSessions);
  return (
    <View style={styles.root}>
      <SectionList
        renderItem={({ item, index, section }) => (
          <SessionListItem
            key={item.id}
            session={item}
            faved={!!faveIds.find(id => id === item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.container}>
            <Text style={styles.header}>{moment(title).format("LT")}</Text>
          </View>
        )}
        sections={allSections}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
};

SessionList.propTypes = {
  allSections: PropTypes.array,
  faveIds: PropTypes.array
};

export default SessionList;
