import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Awards from '../../components/Awards';

import styles from './styles.module.css';
import Experience from '../../components/Experience';

export default class Homepage extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Navbar />
				<div className={styles['container--right']}>
					<Awards />
					<Experience />
				</div>
			</div>
		);
	}
}
