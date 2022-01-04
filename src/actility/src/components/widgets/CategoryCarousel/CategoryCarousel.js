import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { CategoryListQuery } from 'schemas';

import { useState } from 'react';
import { classNames } from 'helpers';
import {
	Slider,
	SliderNavigation,
	SliderScrollbar,
	SliderSlide,
} from 'elements/Slider';
import { Container } from 'elements/Container';
import { SectionTitle, SectionTop } from 'elements/Section';
import { CategoryCard } from 'modules/Category/Card';
import { LinkArrow } from 'elements/LinkArrow';

import { CategoryCarouselSeeAllBottomSheet } from './CategoryCarouselSeeAllBottomSheet';

import css from './CategoryCarousel.module.scss';

const CategoryCarousel = ({ title, category_ids, layout_type }) => {
	const [isSeeAll, setSeeAll] = useState(false);
	const isAdvancedCarousel = layout_type === 'with_image';

	const variables = {
		filters: {
			ids: {
				in: category_ids,
			},
		},
	};

	const { loading, data } = useQuery(CategoryListQuery, {
		variables,
	});

	if (!category_ids?.length || !data || loading) return null;

	return (
		<section
			className={classNames(
				'categoryMainpageSlider',
				css.wrapper,
				isAdvancedCarousel ? css.variantAdvanced : css.variantDefault,
			)}
		>
			<Container>
				<SectionTop className={css.sectionTop}>
					<SectionTitle className={css.sectionTitle}>
						{title}
					</SectionTitle>
					{!isAdvancedCarousel && (
						<LinkArrow
							onClick={() => setSeeAll(true)}
							className={css.linkArrow}
							isExternal
						>
							See all
						</LinkArrow>
					)}
				</SectionTop>
				<Slider
					slidesPerView="auto"
					className={css.slider}
					spaceBetween={8}
					breakpoints={{
						0: {
							speed: 80,
							freeMode: true,
							slidesPerView: 'auto',
						},
						...(
							isAdvancedCarousel ? ({
								992: {
									spaceBetween: 21,
								},
							}) : ({
								500: {
									slidesPerView: 8,
									spaceBetween: 22,
									scrollbar: false,
									navigation: true,
								},
							})
						),
					}}
				>
					{data.categoryList?.map((category) => (
						<SliderSlide
							key={category?.id}
							className={css.slide}
						>
							<CategoryCard
								variant={isAdvancedCarousel ? 'advanced' : 'default'}
								category={category}
							/>
						</SliderSlide>
					))}

					<SliderScrollbar className={css.slideScrollbar} />

					{isAdvancedCarousel && (
						<SliderNavigation />
					)}
				</Slider>
			</Container>

			{!isAdvancedCarousel && (
				<CategoryCarouselSeeAllBottomSheet
					onDismiss={() => setSeeAll(false)}
					open={isSeeAll}
					categories={data.categoryList || []}
				/>
			)}
		</section>
	);
};

CategoryCarousel.defaultProps = {
	category_ids: [],
	layout_type: null,
};

CategoryCarousel.propTypes = {
	category_ids: PropTypes.arrayOf(PropTypes.number),
	title: PropTypes.string.isRequired,
	layout_type: PropTypes.oneOf(['default', 'with_image']),
};

export { CategoryCarousel };
