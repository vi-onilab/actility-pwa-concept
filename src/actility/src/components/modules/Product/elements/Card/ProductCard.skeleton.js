import { Skeleton } from 'elements/Skeleton';
import { classNames } from 'helpers';
import { ProductCardWrapper } from './elements';

import css from './ProductCard.module.scss';

const ProductCardSkeleton = ({ variant, className }) => (
	<ProductCardWrapper
		as={Skeleton}
		variant={variant}
		className={classNames(className, css.skeleton)}
	/>
);

ProductCardSkeleton.defaultProps = {
	variant: ProductCardWrapper.defaultProps.variant,
	className: ProductCardWrapper.defaultProps.className,
};

ProductCardSkeleton.propTypes = {
	variant: ProductCardWrapper.propTypes.variant,
	className: ProductCardWrapper.propTypes.className,
};

export { ProductCardSkeleton };
