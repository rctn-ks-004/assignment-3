import * as React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  ALinkContainer,
  InformationText,
  NameText,
  SummaryText,
} from "./styles";
import { CardContainer, RowContainer } from "../../styles";
export default class AboutCard extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      summary,
      gitLink,
      linkend,
    } = this.props;

    return (
      <CardContainer>
        <RowContainer>
          <NameText>{firstName}</NameText>
          <NameText variant="red">{lastName}</NameText>
        </RowContainer>

        <RowContainer>
          <InformationText>{phoneNumber}</InformationText>
          <InformationText variant="red">{email}</InformationText>
        </RowContainer>

        <SummaryText dangerouslySetInnerHTML={{ __html: summary }} />

        <RowContainer>
          <ALinkContainer href={gitLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" />
          </ALinkContainer>

          <ALinkContainer href={linkend} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </ALinkContainer>
        </RowContainer>
      </CardContainer>
    );
  }
}

AboutCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  gitLink: PropTypes.string.isRequired,
  linkend: PropTypes.string.isRequired,
};
