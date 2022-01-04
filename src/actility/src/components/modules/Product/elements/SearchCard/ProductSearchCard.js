import PropTypes from 'prop-types';
import { Link } from 'elements/Link';
import {
	Price,
	PriceCurrentValue,
	PriceInitialValue,
	PriceBadge,
} from 'elements/Price';
import {
	classNames,
} from 'helpers';
import { useRouter } from 'hooks';
import { Image } from 'elements/Image';

import css from './ProductSearchCard.module.scss';

const ProductSearchCard = ({ product, className }) => {
	const { getEntityUrl } = useRouter();
	const to = getEntityUrl(product);
	const images = product?.mediaGallery?.map(({ url, label }) => ({ src: url, alt: label }));

	return (
		<Link to={to} className={classNames(css.wrapper, className)}>
			<div className={css.image}>
				{images?.length > 0 && (
					<Image src={images?.[0]?.src} className={css.imageItem} alt={images?.[0]?.alt} />
				)}
			</div>
			<div className={css.content}>
				<div className={css.title}>{product.name}</div>
				<div className={css.brand}>{product?.manufacturerName}</div>
				<Price
					isRange={product?.calculatedPrice?.isRange}
					currentValue={product?.calculatedPrice?.current?.value}
					initialValue={product?.calculatedPrice?.initial?.value}
					className={css.price}
				>
					<PriceCurrentValue />
					<PriceInitialValue />
					<PriceBadge
						className={css.badges}
						data={product.priceBadges}
					/>
				</Price>
			</div>
		</Link>
	);
};

ProductSearchCard.defaultProps = {
	product: null,
	className: null,
};

ProductSearchCard.propTypes = {
	product: PropTypes.oneOfType([PropTypes.object]),
	className: PropTypes.string,
};

export { ProductSearchCard };
