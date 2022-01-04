import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	ProductFieldsCommercialStatus,
	ProductFieldsStockBadge,
	ProductFieldsVat,
	ProductNotifyButton,
} from 'modules/Product';
import { Label } from 'components/elements/Label';
import {
	Price, PriceBadge, PriceCurrentValue, PriceInitialValue,
} from 'components/elements/Price';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { $auth } from 'models';

import css from './ProductFormPrice.module.scss';

const ProductFormPrice = (
	{
		data,
		className,
	},
) => {
	const isToken = $auth.useIsToken();
	const commercialJsx = (
		<ProductFieldsCommercialStatus
			data={data}
			className={css.commercial}
		/>
	);

	return (
		<div
			className={classNames(css.wrapper, className)}
		>
			<ProductFieldsStockBadge data={data} />
			{!data?.isSimpleProduct && (
				<Label>
					Initial price
				</Label>
			)}
			<Price
				isRange={data?.calculatedPrice?.isRange}
				currentValue={data?.calculatedPrice?.current?.value}
				initialValue={data?.calculatedPrice?.initial?.value}
				className={css.price}
			>
				<PriceCurrentValue className={css.priceCurrent} />
				<PriceInitialValue className={css.priceInitial} />
				<PriceBadge className={css.priceBadge} />
			</Price>
			<ProductFieldsVat data={data} />
			<MediaBreakpointDown name="lg">
				{commercialJsx}
			</MediaBreakpointDown>
			<div className={css.split}>
				{isToken && (
					<ProductNotifyButton data={data} />
				)}
				<MediaBreakpointUp name="lg">
					{commercialJsx}
				</MediaBreakpointUp>
			</div>
		</div>
	);
};

ProductFormPrice.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	className: PropTypes.string,
};

ProductFormPrice.defaultProps = {
	data: null,
	className: null,
};

export { ProductFormPrice };
