import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Slider, SliderSlide } from 'elements/Slider';
import { SectionTitle, SectionTop } from 'elements/Section';
import { LinkArrow } from 'elements/LinkArrow';
import { Link } from 'elements/Link';
import { ModalHeaderBackArrow, ModalPortal } from 'elements/Modal';
import { NavList, NavListItem } from 'elements/NavList';
import { MediaBreakpointDown, MediaBreakpointUp } from 'providers';
import { classNames } from 'helpers';
import { Container } from 'elements/Container';

import css from './CategoryNav.module.scss';
import { CategoryCard } from '../Card';

const CategoryNav = memo((
	{
		data,
	},
) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className={css.categorySection}>
			<Container variant="wide">
				<SectionTop className={css.sectionTop}>
					<SectionTitle className={css.sectionTitle}>Categories</SectionTitle>
					{data?.children?.length > 3 && (
						<LinkArrow
							onClick={() => setOpen(true)}
							className={css.linkArrow}
						>
							See all
							<span className={css.linkArrowLgHide}> categories</span>
						</LinkArrow>
					)}
				</SectionTop>
				<Slider
					slidesPerView="auto"
					spaceBetween={4}
					className={classNames(css.container, css.containerVisible)}
					breakpoints={{
						992: {
							spaceBetween: 8,
						},
					}}
				>
					{data?.parentCategory?.level > 1 && (
						<SliderSlide className={css.slide}>
							<CategoryCard variant="smallActive" category={data?.parentCategory} />
						</SliderSlide>
					)}
					{data?.children.map((category) => (
						<SliderSlide
							key={category?.id}
							className={css.slide}
						>
							<CategoryCard variant="small" category={category} />
						</SliderSlide>
					))}
				</Slider>

				<MediaBreakpointUp name="lg">
					<ModalPortal
						className={css.modal}
						isOpen={isOpen}
						onDismiss={() => setOpen(false)}
					>
						<div className={classNames(css.modalTitle, css.modalTitleCenter)}>
							All categories
						</div>
						<div className={css.modalMain}>
							{data?.children.map((category, index) => (
								<div className={css.modalCategoryList} key={category?.id || index}>
									<CategoryCard variant="smallList" category={category} />
								</div>
							))}
						</div>
					</ModalPortal>
				</MediaBreakpointUp>

				<MediaBreakpointDown name="lg">
					<ModalPortal
						className={css.modal}
						isOpen={isOpen}
						header={(
							<ModalHeaderBackArrow onDismiss={() => setOpen(false)}>
								All categories
							</ModalHeaderBackArrow>
						)}
						onDismiss={() => setOpen(false)}
					>
						<NavList>
							{data?.children.map(({ id, name }, index) => (
								<NavListItem
									isArrow
									as={Link}
									asProps={{
										to: `/category/${id}`,
									}}
									key={id || index}
								>
									{name}
								</NavListItem>
							))}
						</NavList>
					</ModalPortal>
				</MediaBreakpointDown>
			</Container>
		</section>
	);
});

CategoryNav.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		level: PropTypes.number,
		name: PropTypes.string,
		children: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			name: PropTypes.string,
			imageUrl: PropTypes.string,
		})),
		parentCategory: PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			name: PropTypes.string,
			level: PropTypes.number,
		}),
		__typename: PropTypes.oneOf(['CategoryTree']),
	}),
};

CategoryNav.defaultProps = {
	data: null,
};

export { CategoryNav };
