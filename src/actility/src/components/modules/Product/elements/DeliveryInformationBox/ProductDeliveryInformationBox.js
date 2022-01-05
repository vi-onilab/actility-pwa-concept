import { useState } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Icon } from 'elements/Icon';
import { CarIcon, ChevronArrowRightIcon } from 'icons';
import { Flex } from 'elements/Flex';
import { ShippingCard, ShippingModalBottomSheet } from 'modules/Shipping';

import css from './ProductDeliveryInformationBox.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	quickView: css.variantQuickView,
};

const ProductDeliveryInformationBox = (
	{
		className,
		variant,
	},
) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setOpen((prev) => !prev)}
				className={classNames(
					css.wrapper,
					className,
					(variant && VARIANTS?.[variant]) || VARIANTS.default,
				)}
			>
				<Flex
					alignItems="center"
					className={css.item}
				>
					<Icon
						src={CarIcon}
						className={css.icon}
					/>
					<p className={css.title}>Delivery Information</p>
					<Icon
						src={ChevronArrowRightIcon}
						className={css.arrow}
					/>
				</Flex>
				<span className={css.description}>Usually delivered in 10 working days</span>
			</button>
			<ShippingModalBottomSheet
				isOpen={isOpen}
				onDismiss={() => setOpen(false)}
			>
				<ShippingCard />
				<ShippingCard />
			</ShippingModalBottomSheet>
		</>
	);
};

ProductDeliveryInformationBox.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf([false, 'default', 'quickView']),
};

ProductDeliveryInformationBox.defaultProps = {
	className: null,
	variant: 'default',
};

export { ProductDeliveryInformationBox };
