import React from "react";
import { styles } from "./styles";

export class EducationCard extends React.Component {
    render() {
        const { title, institute, start, end, summary } = this.props;
        return(
            <div className={styles.container()}>
                <div className={styles.body()}>
                    <div className={styles.title()}>{title}</div>
                    <div className={styles.date()}>{start} - {end}</div>
                </div>
                <div className={styles.institute()}>{institute}</div>
                <div className={styles.summary()}>{summary}</div>
            </div>
        );
    }
}