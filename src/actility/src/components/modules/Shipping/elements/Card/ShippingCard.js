import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { ChevronArrowRightIcon, QuestionIcon } from 'icons';
import PropTypes from 'prop-types';
import ShippingDaddyImage from 'images/product-page-go-daddy.png';
import { Image } from 'elements/Image';

import css from './ShippingCard.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	touch: css.variantTouch,
};

const ShippingCard = (
	{
		className,
		variant,
		onClick,
	},
) => (
	<button
		type="button"
		className={classNames(
			css.wrapper,
			className,
			!!onClick && css.isAction,
			(variant && VARIANTS?.[variant]) || VARIANTS.default,
		)}
		onClick={onClick}
	>
		<div className={css.logo}>
			<Image
				src={ShippingDaddyImage}
				alt="go daddy"
				className={css.logoImage}
			/>
		</div>
		<h2 className={css.title}>
			GoDaddy
		</h2>
		<div className={css.content}>
			<ul className={css.attributes}>
				<li className={css.attribute}>
					<span className={css.attributeTitle}>Shipping:&nbsp;</span>
					business
				</li>
				<li className={css.attribute}>
					<span className={css.attributeTitle}>From:&nbsp;</span>
					€16.00
					<Icon
						src={QuestionIcon}
						className={css.attributeIcon}
					/>
				</li>
				<li className={css.attribute}>
					<span className={css.attributeTitle}>Delivery time:&nbsp;</span>
					Usually delivered in 10 working days
				</li>
			</ul>
			<div className={css.text}>
				We have the ability to deliver to all countries in the world.
				Our employees treat the supplied product with care.
			</div>
		</div>
		<Icon
			src={ChevronArrowRightIcon}
			className={css.arrow}
		/>
	</button>
);

ShippingCard.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'touch', false]),
	onClick: PropTypes.func,
};

ShippingCard.defaultProps = {
	className: null,
	variant: 'default',
	onClick: null,
};

export { ShippingCard };
