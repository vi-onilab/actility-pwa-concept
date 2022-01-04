import PropTypes from 'prop-types';
import Badge from 'components/elements/Badge';
import { classNames } from 'helpers';

import css from './ProductFieldsStockBadge.module.scss';

const ProductFieldsStockBadge = (
	{
		className,
		data,
	},
) => {
	if (data?.stockStatus?.length < 1) {
		return null;
	}

	const isInStock = data?.stockStatus === 'IN_STOCK';

	return (
		<Badge
			className={classNames(css.wrapper, className)}
			variant="priceLabel"
		>
			{isInStock ? 'In Stock' : 'Out of stock'}
		</Badge>
	);
};

ProductFieldsStockBadge.propTypes = {
	className: PropTypes.string,
	data: PropTypes.shape({
		stockStatus: PropTypes.string,
	}),
};

ProductFieldsStockBadge.defaultProps = {
	className: null,
	data: null,
};

export { ProductFieldsStockBadge };
