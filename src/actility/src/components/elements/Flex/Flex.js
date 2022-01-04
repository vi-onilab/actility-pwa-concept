import { createElement } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Flex.module.scss';

const DIRECTION = {
	row: css.directionRow,
	rowReverse: css.directionRowReverse,
	column: css.directionColumn,
	columnReverse: css.directionColumnReverse,
};

const ALIGN_ITEMS = {
	start: css.alignItemsStart,
	center: css.alignItemsCenter,
	end: css.alignItemsEnd,
	stretch: css.alignItemsStretch,
};

const JUSTIFY_CONTENT = {
	start: css.justifyContentStart,
	center: css.justifyContentCenter,
	end: css.justifyContentEnd,
	spaceBetween: css.justifyContentSpaceBetween,
	stretch: css.justifyContentStretch,
};

const FLEX = {
	auto: css.flexAuto,
};

const WRAP = {
	wrap: css.wrapWrap,
	nowrap: css.wrapNoWrap,
};

const Flex = (
	{
		children,
		className,
		as,
		asProps,
		flex,
		direction,
		alignItems,
		justifyContent,
		wrap,
	},
) => (
	createElement(
		as,
		{
			...(asProps || {}),
			className: classNames(
				css.wrapper,
				flex && FLEX?.[flex],
				direction && DIRECTION?.[direction],
				alignItems && ALIGN_ITEMS?.[alignItems],
				justifyContent && JUSTIFY_CONTENT?.[justifyContent],
				wrap && WRAP?.[wrap],
				className,
			),
		},
		children,
	)
);

Flex.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	asProps: PropTypes.oneOfType([PropTypes.object]),
	direction: PropTypes.oneOf(['column', 'columnReverse', 'row', 'rowReverse']),
	alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
	justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'spaceBetween', 'stretch']),
	flex: PropTypes.oneOf(['auto']),
	wrap: PropTypes.oneOf(['wrap', 'nowrap']),
};

Flex.defaultProps = {
	children: null,
	className: null,
	as: 'div',
	asProps: {},
	direction: null,
	alignItems: null,
	justifyContent: null,
	flex: null,
	wrap: null,
};

export { Flex };
