import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './ShippingList.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	touch: css.variantTouch,
	modal: css.variantModal,
};

const ShippingList = (
	{
		children,
		className,
		variant,
	},
) => (
	<div
		className={classNames(
			css.wrapper,
			className,
			(variant && VARIANTS?.[variant]) || VARIANTS.default,
		)}
	>
		{children}
	</div>
);

ShippingList.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	variant: PropTypes.oneOf(['default', 'touch', 'modal', false]),
	className: PropTypes.string,
};

ShippingList.defaultProps = {
	children: null,
	variant: 'default',
	className: null,
};

export { ShippingList };
