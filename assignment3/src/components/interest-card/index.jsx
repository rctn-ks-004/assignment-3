import * as React from "react";
import { CardContainer } from "../../styles";
import { SummaryText } from "../about-card/styles";

export default class InterestCard extends React.Component {
  render() {
    return (
      <CardContainer>
        <SummaryText>
          Hello Yorobun! Nah now i'm interesting about how to build progressive
          web application with React JS and backend with Express JS, then i love
          to play any sports game. And i'm absolutely interesting with a girl not
          a boy, at last Twice is my favorite girl band.
        </SummaryText>
      </CardContainer>
    );
  }
}
