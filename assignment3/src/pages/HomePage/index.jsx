import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

import styles from './styles.module.css';

export default class Homepage extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Navbar />
				<Container />
			</div>
		);
	}
}
