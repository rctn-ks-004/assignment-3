import React, { Component } from 'react';

import styles from './styles.module.css';

export default class Lists extends Component {
	render() {
		const { title, subtitle, description, date } = this.props.data[0];
		return (
			<ul className={styles['list--container']}>
				<li className={styles['list']}>
					<div className={styles['left--container']}>
						<h2>{title}</h2> <h3>{subtitle}</h3>
						<p>{description}</p>
					</div>
					<div className={styles['right--container']}>{date}</div>
				</li>
			</ul>
		);
	}
}
