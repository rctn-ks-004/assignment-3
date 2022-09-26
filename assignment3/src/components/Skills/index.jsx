import React, { Component } from 'react';

import Container from '../Container';
import SkillLists from '../SkillLists';

import styles from './styles.module.css';

export default class Skills extends Component {
	constructor() {
		super();
		this.state = [
			'React Js',
			'Javascript',
			'HTML',
			'CSS',
			'C#',
			'C',
			'Python',
			'Trello',
			'Git',
		];
	}
	render() {
		return (
			<Container title="Skills" id="skills">
				<p className={styles['subtitle']}>Programming languanges &amp; tools</p>
				<SkillLists data={this.state} />
			</Container>
		);
	}
}
