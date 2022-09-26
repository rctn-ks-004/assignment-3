import React, { Component } from 'react';

import styles from './styles.module.css';

import Image from '../Image';

export default class Navbar extends Component {
	render() {
		return (
			<nav className={styles['navbar--container']}>
				<Image />
				<ul className={styles['nav--item_container']}>
					<li className={styles['nav--item']}>About</li>
					<li className={styles['nav--item']}>Experience</li>
					<li className={styles['nav--item']}>Education</li>
					<li className={styles['nav--item']}>Skills</li>
					<li className={styles['nav--item']}>Interests</li>
					<li className={styles['nav--item']}>Awards</li>
				</ul>
			</nav>
		);
	}
}
