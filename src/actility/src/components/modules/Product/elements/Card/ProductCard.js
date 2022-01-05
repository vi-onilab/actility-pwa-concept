import { memo } from 'react';
import PropTypes from 'prop-types';
import Badge from 'elements/Badge';
import { Link } from 'elements/Link';
import {
	Price, PriceBadge, PriceCurrentValue, PriceInitialValue,
} from 'elements/Price';
import { ProductFieldsCommercialStatus, ProductRating } from 'modules/Product';
import { useRouter } from 'hooks';

import {
	ProductCardButtons, ProductCardFloatButtons, ProductCardImages, ProductCardParams, ProductCardWrapper,
} from './elements';

import css from './ProductCard.module.scss';

const ProductCard = memo((
	{
		product,
		variant,
		className,
	},
) => {
	const { getEntityUrl } = useRouter();
	const to = getEntityUrl(product);
	const images = product?.mediaGallery?.map(({ url, label }) => ({ src: url, alt: label }));

	return (
		<ProductCardWrapper className={className} variant={variant}>
			{product.categories?.length > 0 && (
				<Badge
					className={css.badge}
					variant="categoryLabel"
					icon={product.categories?.[0]?.categoryWidgetSvgIcon}
				>
					{product.categories?.[0]?.name}
				</Badge>
			)}
			<ProductCardFloatButtons data={product} />
			<Link to={to} className={css.image}>
				<ProductCardImages images={images} />
			</Link>

			<ProductRating
				className={css.rating}
				data={product}
			/>

			<Link
				to={to}
				className={css.title}
			>
				{product.name}
			</Link>
			<div className={css.brand}>{product?.manufacturerName}</div>
			<Price
				isRange={product?.calculatedPrice?.isRange}
				currentValue={product?.calculatedPrice?.current?.value}
				initialValue={product?.calculatedPrice?.initial?.value}
				className={css.price}
			>
				<PriceCurrentValue className={css.priceCurrent} />
				<PriceInitialValue className={css.priceInitial} />
				<PriceBadge
					data={product?.priceBadges}
					className={css.priceBadges}
				/>
			</Price>
			<div className={css.tooltip}>
				<ProductFieldsCommercialStatus variant={variant} data={product} />
			</div>
			<ProductCardButtons data={product} />
			<ProductCardParams data={product} />
		</ProductCardWrapper>
	);
});

ProductCard.defaultProps = {
	product: {},
	className: null,
	variant: ProductCardWrapper.defaultProps.variant,
};

ProductCard.propTypes = {
	product: PropTypes.oneOfType([PropTypes.object]),
	className: PropTypes.string,
	variant: ProductCardWrapper.propTypes.variant,
};

export { ProductCard };
