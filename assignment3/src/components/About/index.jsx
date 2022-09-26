import React, { Component } from 'react';
import Container from '../Container';

export default class About extends Component {
	render() {
		return (
			<Container title="About" id="about">
				<p>
					Hello, my name is Tata Sulysta people usually called me tata. I am an
					undergraduated student of Informatics Engineering from Universitas
					Mikroskil in Medan, North Sumatera, Indonesia.{' '}
				</p>
				<p style={{ fontSize: 'xx-small' }}>
					ps : don't have any other nickname because my name is short enough to
					be a nickname
				</p>
			</Container>
		);
	}
}
