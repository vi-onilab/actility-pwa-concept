import PropTypes from 'prop-types';
import { createElement } from 'react';
import { classNames } from 'helpers';

import css from './SectionTop.module.scss';

const SectionTop = ({ children, className, as }) => (
	createElement(
		as,
		{
			className: classNames(
				css.sectionTop,
				className,
			),
		},
		children,
	)
);

SectionTop.defaultProps = {
	children: null,
	className: null,
	as: 'div',
};

SectionTop.propTypes = {
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

export { SectionTop };
