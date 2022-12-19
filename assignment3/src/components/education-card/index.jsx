import * as React from "react";
import PropTypes from "prop-types";
import {
  DateText,
  HeaderContainer,
  InstanceText,
  SummaryText,
} from "./styles";
import { CardContainer } from "../../styles";

export default class EducationCard extends React.Component {
  render() {
    const { instance, start, end, summary } = this.props;
    return (
      <CardContainer>
        <HeaderContainer>
          <InstanceText>{instance}</InstanceText>
          <DateText>
            {start} - {end}
          </DateText>
        </HeaderContainer>
        <SummaryText>{summary}</SummaryText>
      </CardContainer>
    );
  }
}

EducationCard.propTypes = {
  instance: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
