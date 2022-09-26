import React, { Component } from 'react';
import Container from '../Container';
import Lists from '../Lists';

export default class Education extends Component {
	constructor() {
		super();
		this.state = [
			{
				title: 'Informatics Engineering',
				subtitle: 'Universitas Mikroskil',
				description: '',
				date: '2019-2022',
			},
			{
				title: 'React and React Native for Front End Developer',
				subtitle: 'Hacktiv8 Indonesia',
				description: '',
				date: 'Aug 2022- Dec 2022',
			},
			{
				title: 'How to be an Ideal Top Search React JS Front-End Engineer',
				subtitle: 'Alterra Academy',
				description: '',
				date: 'Feb 2022 - Jul 2022',
			},
			{
				title: 'Science',
				subtitle: 'Sekolah Swasta Sutomo 2',
				description: '',
				date: '2016-2019',
			},
		];
	}
	render() {
		return (
			<Container title="Education" id="education">
				<Lists data={this.state} />
			</Container>
		);
	}
}
