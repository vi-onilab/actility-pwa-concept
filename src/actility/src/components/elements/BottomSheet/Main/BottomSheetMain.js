import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './BottomSheetMain.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	bottom: css.variantBottom,
};

const BottomSheetMain = (
	{
		children,
		className,
		variant,
	},
) => (
	<div
		className={classNames(
			css.wrapper,
			variant && VARIANTS?.[variant],
			className,
		)}
	>
		{children}
	</div>
);

BottomSheetMain.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'bottom']),
};

BottomSheetMain.defaultProps = {
	children: null,
	className: null,
	variant: 'default',
};

export { BottomSheetMain };
