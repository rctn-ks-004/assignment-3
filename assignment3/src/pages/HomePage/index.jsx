import React, { Component } from 'react';

import Navbar from '../../components/Navbar';
import Awards from '../../components/Awards';

import styles from './styles.module.css';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Interests from '../../components/Interests';
import About from '../../components/About';
import Education from '../../components/Education';

export default class Homepage extends Component {
	render() {
		return (
			<div className={styles.container}>
				<Navbar />
				<div className={styles['container--right']}>
					<About />
					<Experience />
					<Education />
					<Skills />
					<Interests />
					<Awards />
				</div>
			</div>
		);
	}
}
