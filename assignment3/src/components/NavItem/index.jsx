import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

import { NAV_ITEM as navData } from '../../utils/constants/navItem';

export default function NavItem() {
	const navigate = useNavigate();
	return (
		<ul className={styles[`nav--item_container`]}>
			{navData.map(({ id, link, name }) => (
				<li className={styles['nav--item']} key={id}>
					<Link
						spy={true}
						to={link}
						onClick={() => navigate(`#${link}`)}
						activeClass="active"
					>
						{name}
					</Link>
				</li>
			))}
		</ul>
	);
}
