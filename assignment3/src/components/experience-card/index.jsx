import * as React from "react";
import PropTypes from "prop-types";
import {
  CityText,
  CompanyText,
  DateText,
  HeaderContainer,
  SummaryText,
} from "./styles";
import { CardContainer } from "../../styles";

export default class ExperienceCard extends React.Component {
  render() {
    const { company, city, workStart, workEnd, summary } = this.props;

    return (
      <CardContainer>
        <HeaderContainer>
          <CompanyText>{company}</CompanyText>
          <DateText>
            {workStart} - {workEnd}
          </DateText>
        </HeaderContainer>
        <CityText>{city}</CityText>
        <SummaryText>{summary}</SummaryText>
      </CardContainer>
    );
  }
}

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  workStart: PropTypes.string.isRequired,
  workEnd: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};
