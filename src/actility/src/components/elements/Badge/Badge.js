import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';

import css from './Badge.module.scss';

const VARIANTS = {
	new: css.variantNew,
	discount: css.variantDiscount,
	categoryLabel: css.variantCategoryLabel,
	filterLabel: css.variantFilterLabel,
	priceLabel: css.variantPriceLabel,
	subscribeLabel: css.variantSubscribeLabel,
	cart: css.variantCart,
};

const Badge = ({
	children, className, variant, icon,
}) => (
	<div className={classNames(css.badge, variant && VARIANTS[variant], className)}>
		{icon && (
			<Icon src={icon} className={css.icon} />
		)}
		<div className={css.main}>
			{children}
		</div>
	</div>
);

Badge.defaultProps = {
	children: null,
	className: null,
	variant: 'default',
	icon: null,
};

Badge.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'new',
		'discount',
		'default',
		'categoryLabel',
		'filterLabel',
		'priceLabel',
		'subscribeLabel',
		'cart',
	]),
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
};

export default Badge;
