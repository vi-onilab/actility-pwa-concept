import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Slider, SliderNavigation, SliderSlide } from 'elements/Slider';
import { MediaBreakpointUp } from 'providers';
import { ProductCardSkeleton, ProductQuickViewProvider } from 'modules/Product';

import { ProductCard } from '../Card';
import css from './ProductSlider.module.scss';

const ProductSlider = memo((
	{
		className,
		data,
		variant,
		isLoading,
		viewCount,
	},
) => {
	const slides = useMemo(() => (
		isLoading && !data?.length ? (
			Array.from({ length: 4 }).map((id, index) => (
				<SliderSlide key={id || index} className={css.slide}>
					<ProductCardSkeleton
						variant={variant}
					/>
				</SliderSlide>
			))
		) : (
			data?.map((product, index) => (
				<SliderSlide key={product?.id || index} className={css.slide}>
					<ProductCard
						product={product}
						variant={variant}
					/>
				</SliderSlide>
			))
		)
	), [data, isLoading, variant]);
	return (
		<ProductQuickViewProvider data={data}>
			<Slider
				slidesPerView={1.43}
				slidesOffsetBefore={20}
				slidesOffsetAfter={20}
				spaceBetween={12}
				breakpoints={{
					0: {
						animating: false,
						cssMode: true,
					},
					998: {
						slidesPerView: (!viewCount && (variant === 'large' ? 4 : 5)) || viewCount,
						spaceBetween: variant === 'large' ? 20 : 14,
						slidesOffsetBefore: 0,
						slidesOffsetAfter: 0,
					},
				}}
				className={(
					classNames(
						css.wrapper,
						className,
					)
				)}
			>
				{slides}
				<MediaBreakpointUp name="lg">
					<SliderNavigation />
				</MediaBreakpointUp>
			</Slider>
		</ProductQuickViewProvider>
	);
});

ProductSlider.propTypes = {
	className: PropTypes.string,
	variant: ProductCard.propTypes.variant,
	data: PropTypes.oneOfType([PropTypes.array]),
	isLoading: PropTypes.bool,
	viewCount: PropTypes.number,
};

ProductSlider.defaultProps = {
	className: null,
	variant: ProductCard.defaultProps.variant,
	data: [],
	isLoading: false,
	viewCount: null,
};

export { ProductSlider };
