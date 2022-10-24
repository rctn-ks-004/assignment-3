import React, { Component } from 'react';

import Container from '../Container';

import styles from './styles.module.css';

export default class Interest extends Component {
	render() {
		return (
			<Container title={'Awards & Certification'} id="awards">
				<ul className={`content ${styles['list--container']}`}>
					<li>
						🎈 1st Best Mentee How to be an Ideal Top Search React JS Front-End
						Engineer
					</li>
					<li>🎈 How to be an Ideal Top Search React JS Front-End Engineer</li>
					<li>🎈 RH124 : Red Hat Enterprise Linux System Administrator I</li>
					<li>🎈 Belajar Dasar Pemrograman Javascript</li>
					<li>🎈 Belajar Membuat Aplikasi Web dengan React</li>
					<li>🎈 Belajar Membuat Front-End Web untuk Pemula</li>
					<li>🎈 Belajar Dasar Pemograman Web</li>
				</ul>
			</Container>
		);
	}
}
