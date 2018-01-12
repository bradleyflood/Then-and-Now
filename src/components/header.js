import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import routes from '../routes';
import {COLORS} from '../theme';

const Header = styled.header`
	margin-bottom: 15px;
	padding: 15px;
	background-color: ${COLORS.header.background};
`;

const NavUl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	justify-content: flex-end;
	align-items: center;
`;

const NavLi = styled.li`
	margin-left: 15px;
	list-style: none;
`;

const NavLiTitle = styled.li`
	flex-grow: 1;
	list-style: none;
`;

const NavLink = styled(Link)`
	display: inline-block;
	padding: 8px 14px;
	border-radius: 3px;
	font-size: 16px;
	font-family: 'Josefin Sans', sans-serif;
	color: ${COLORS.header.links.color};
	text-decoration: none;
	
	&:hover {
		background-color: ${COLORS.header.links.hoverBackground};
	}
`;

export const HeaderWrapper = ({navLinks}) => (
	<Header>
		<nav>
			<NavUl>
				<NavLiTitle>
					<NavLink
						to={routes.home.path}
						title={routes.home.description}
					>
						{routes.home.title}
					</NavLink>
				</NavLiTitle>
				{navLinks.map((link) => (
					<NavLi>
						<NavLink
							to={link.path}
							title={link.description}
						>
							{link.title}
						</NavLink>
					</NavLi>
				))}
			</NavUl>
		</nav>
	</Header>
);

HeaderWrapper.propTypes = {
	navLinks: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			path: PropTypes.string,
			description: PropTypes.string,
		})
	).isRequired,
};


export default HeaderWrapper;
