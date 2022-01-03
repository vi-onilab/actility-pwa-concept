import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import {
	ProductCard,
	ProductCardSkeleton,
} from 'modules/Product';
import { Icon } from 'elements/Icon';
import { SearchQuestionIcon } from 'icons';

import css from './ProductList.module.scss';

const VARIANTS = {
	list: css.variantList,
	grid: css.variantGrid,
};

const ProductList = (
	{
		variant,
		products,
		skeletonCount,
	},
) => (
	<>
		{products?.length < 1 && skeletonCount < 1 && (
			<div className={css.empty}>
				<Icon src={SearchQuestionIcon} className={css.emptyIcon} />
				Nothing found with these parameters
			</div>
		)}
		<div
			className={classNames(
				css.wrapper,
				(variant && VARIANTS?.[variant]) || VARIANTS.grid,
			)}
		>
			{products?.map((product, index) => (
				<ProductCard
					product={product}
					variant={variant === 'list' ? 'list' : 'grid'}
					key={product?.id || product?.entityId || index}
				/>
			))}

			{skeletonCount > 0 && (
				Array
					.from({ length: skeletonCount })
					.map((item, index) => (
						<ProductCardSkeleton
							variant={variant === 'list' ? 'list' : 'grid'}
							key={item || index}
						/>
					))
			)}
		</div>
	</>
);

ProductList.propTypes = {
	variant: PropTypes.oneOf(['grid', 'list']),
	products: PropTypes.oneOfType([PropTypes.array]),
	skeletonCount: PropTypes.number,
};

ProductList.defaultProps = {
	variant: 'grid',
	products: [],
	skeletonCount: 0,
};

export { ProductList };
