import * as React from "react";
import { LiCustom } from "./styles";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import colors from "../../styles/colors";
export default class SkillCard extends React.Component {
  render() {
    const { skill } = this.props;
    return (
      <LiCustom>
        <FontAwesomeIcon icon={faStar} size="1x" color={colors.primary}/> {skill}
      </LiCustom>
    );
  }
}

SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
};
