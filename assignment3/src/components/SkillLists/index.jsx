import React, { Component } from 'react';

import styles from './styles.module.css';

export default class SkillLists extends Component {
	render() {
		const { data } = this.props;
		const length = data.length;
		return (
			<ul className={styles['container']}>
				{data.map((data, index) => {
					return index & 1 ? (
						<>
							<li key={data} className={styles['breaked-list']}>
								✅ {data}
							</li>
							<div className="break"></div>
						</>
					) : (
						<li key={data}>✅ {data}</li>
					);
				})}
			</ul>
		);
	}
}
