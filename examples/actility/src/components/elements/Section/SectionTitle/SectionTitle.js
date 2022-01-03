import PropTypes from 'prop-types';
import { createElement } from 'react';
import { classNames } from 'helpers';

import css from './SectionTitle.module.scss';

const SectionTitle = ({ children, className, as }) => (
	createElement(
		as,
		{
			className: classNames(
				css.sectionTitle,
				className,
			),
		},
		children,
	)
);

SectionTitle.defaultProps = {
	children: null,
	className: null,
	as: 'h2',
};

SectionTitle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	as: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
	]),
};

export { SectionTitle };
