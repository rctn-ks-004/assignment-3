import React from "react";
import { styles } from "./styles";

export class ExperienceCard extends React.Component {
    render() {
        const { position, company, start, end, summary } = this.props;
        return(
            <div className={styles.container()}>
                <div className={styles.body()}>
                    <div className={styles.jobPosition()}>{position}</div>
                    <div className={styles.date()}>{start} - {end}</div>
                </div>
                <div className={styles.company()}>{company}</div>
                <div className={styles.summary()}>{summary}</div>
            </div>
        );
    }
}