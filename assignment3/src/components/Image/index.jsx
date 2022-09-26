import React, { Component } from 'react';

import styles from './styles.module.css';

export default class Image extends Component {
	render() {
		return (
			<img
				className={styles.image}
				src="./picture-placeholder.jfif"
				alt="profile"
			/>
		);
	}
}
