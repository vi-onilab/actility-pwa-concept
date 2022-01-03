import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { ProductSectionRelatedProducts, ProductSectionSimilarProducts } from 'modules/Product';

import css from './ProductSectionCarousels.module.scss';

const ProductSectionCarousels = (
	{
		data,
		className,
	},
) => (
	(data?.similarProducts?.length > 0 || data?.relatedProducts?.length > 0) && (
		<div
			className={classNames(css.wrapper, className)}
		>
			<ProductSectionSimilarProducts data={data} />
			<ProductSectionRelatedProducts data={data} />
		</div>
	)
);

ProductSectionCarousels.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.object,
	]),
	className: PropTypes.string,
};

ProductSectionCarousels.defaultProps = {
	data: null,
	className: null,
};

export { ProductSectionCarousels };
