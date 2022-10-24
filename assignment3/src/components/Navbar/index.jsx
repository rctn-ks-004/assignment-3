import React, { Component } from 'react';

import styles from './styles.module.css';

import Image from '../Image';

import NavItem from '../NavItem';

export default class Navbar extends Component {
	render() {
		return (
			<nav className={styles['navbar--container']}>
				<Image />
				<NavItem />
			</nav>
		);
	}
}
