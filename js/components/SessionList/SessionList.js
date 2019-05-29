import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import SessionListItem from "../SessionListItem";

const SessionList = ({ allSections }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item, index, section }) => (
          <SessionListItem key={item.id} session={item} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{moment(title).format("LT")}</Text>
        )}
        sections={allSections}
        keyExtractor={(item, index) => item.title}
      />
    </View>
  );
};

SessionList.propTypes = {
  allSections: PropTypes.array
};

export default SessionList;
