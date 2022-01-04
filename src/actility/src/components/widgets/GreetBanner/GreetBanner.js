import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { PromoBannersQuery } from 'schemas';
import { Slider, SliderPagination, SliderSlide } from 'elements/Slider';
import { useMediaBreakpoint } from 'providers';

import GreetBannerSlide from './GreetBannerSlide';
import { GreetBannerSkeleton } from './GreetBanner.skeleton';
import css from './GreetBanner.module.scss';

const GreetBanner = (
	{
		banners_group_code: groupCode = null,
	},
) => {
	const { isBreakpointDown } = useMediaBreakpoint();
	const { data, loading } = useQuery(PromoBannersQuery, {
		variables: {
			groupCode,
		},
		skip: !groupCode,
	});

	if (loading) {
		return (<GreetBannerSkeleton />);
	}

	if (!data?.promoBanners) {
		return null;
	}

	return (
		<section className={css.wrapper}>
			<div className={css.greetSlider}>
				<Slider
					breakpoints={{
						0: {
							cssMode: true,
						},
						998: {
							cssMode: false,
						},
					}}
					autoplay={{
						delay: 3500,
					}}
				>
					{data?.promoBanners?.map((banner, currentIndex, self) => (
						<SliderSlide key={banner?.id || currentIndex}>
							<GreetBannerSlide
								banner={banner}
								currentIndex={currentIndex}
								count={self.length}
							/>
						</SliderSlide>
					))}
					{isBreakpointDown('lg') && <SliderPagination className={css.greetPagination} />}
				</Slider>
			</div>
		</section>
	);
};

GreetBanner.propTypes = {
	banners_group_code: PropTypes.string,
};

GreetBanner.defaultProps = {
	banners_group_code: null,
};

export default GreetBanner;
