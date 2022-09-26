import React, { Component } from 'react';

import Container from '../Container';
import ExperienceList from '../ExperienceList';

export default class Experience extends Component {
	render() {
		return (
			<Container title="Experience" id="experience">
				<ExperienceList
					data={[
						{
							title: 'React JS Developer',
							subtitle: 'SoftwareSeni',
							description:
								"Working as a React Js Developer Intern, developed company's internal project",
							date: 'August 2022 - Present',
						},
					]}
				/>
			</Container>
		);
	}
}
