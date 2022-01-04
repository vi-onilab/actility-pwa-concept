import { createElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Section.module.scss';

const Section = (
	forwardRef(
		(
			{
				id,
				children,
				className,
				as,
				asProps,
			},
			ref,
		) => (
			createElement(
				as,
				{
					...asProps,
					id,
					ref,
					className: classNames(
						css.wrapper,
						className,
					),
					children,
				},
			)
		),
	)
);

Section.propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
};

Section.defaultProps = {
	id: null,
	children: null,
	className: null,
	as: 'section',
	asProps: {},
};

export { Section };
