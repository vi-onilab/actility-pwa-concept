import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ReadMore.module.scss';

const ReadMore = (
	{
		className,
		as,
		asProps,
		children,
	},
) => (
	createElement(
		as,
		{
			...asProps,
			className: classNames(css.wrapper, className),
		},
		children,
	)
);

ReadMore.propTypes = {
	className: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
		PropTypes.string,
	]),
};

ReadMore.defaultProps = {
	className: null,
	as: 'span',
	asProps: {},
	children: 'Read more',
};

export { ReadMore };
