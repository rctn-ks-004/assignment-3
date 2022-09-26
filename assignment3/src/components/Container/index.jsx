import React, { Component } from 'react';

import styles from './styles.module.css';
export default class Container extends Component {
	render() {
		return (
			<section className={styles.container}>
				<h1>{this.props.title}</h1>

				<div>{this.props.children}</div>
			</section>
		);
	}
}
