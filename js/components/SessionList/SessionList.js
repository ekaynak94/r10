import React from "react";
import { SectionList, View, Text } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import moment from "moment";
import SessionListItem from "../SessionListItem";
import FavesContext from "../../context/FavesContext";

const SessionList = ({ allSections }) => {
  return (
    <FavesContext.Consumer>
      {value => (
        <View>
          <SectionList
            renderItem={({ item, index, section }) => (
              <SessionListItem
                key={item.id}
                session={item}
                faved={!!value.faveIds.find(id => id === item.id)}
              />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text>{moment(title).format("LT")}</Text>
            )}
            sections={allSections}
            keyExtractor={(item, index) => item.title}
          />
        </View>
      )}
    </FavesContext.Consumer>
  );
};

SessionList.propTypes = {
  allSections: PropTypes.array
};

export default SessionList;
