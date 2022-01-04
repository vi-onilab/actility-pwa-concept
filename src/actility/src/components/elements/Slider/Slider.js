import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, {
	Autoplay,
	Controller,
	Navigation,
	Pagination,
	Scrollbar,
	Thumbs,
} from 'swiper';

import { SliderProvider } from './providers';
import { SliderContainer, SliderErrorBoundary } from './elements';

SwiperCore.use([Navigation, Pagination, Autoplay, Scrollbar, Controller, Thumbs]);

const Slider = memo((
	{
		children,
		className,
		...args
	},
) => {
	const [slider, setSlider] = useState(null);
	return (
		<SliderErrorBoundary>
			<SliderProvider
				slider={slider}
				initial={args}
			>
				<SliderContainer
					onInit={setSlider}
					className={className}
				>
					{children}
				</SliderContainer>
			</SliderProvider>
		</SliderErrorBoundary>
	);
});

Slider.defaultProps = {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: false,
	cssMode: false,
	onSlideChange: () => null,
	className: null,
	onSwiper: null,
	breakpoints: {},
	autoplay: false,
	centeredSlides: false,
	freeMode: false,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	loopedSlides: 0,
	autoHeight: false,
	speed: 160,
	threshold: 5,
	direction: 'horizontal',
	slideToClickedSlide: false,
	thumbs: null,
	watchSlidesProgress: false,
	watchOverflow: false,
	children: null,
};

Slider.propTypes = {
	slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	speed: PropTypes.number,
	cssMode: PropTypes.bool,
	spaceBetween: PropTypes.number,
	loop: PropTypes.bool,
	onSwiper: PropTypes.func,
	className: PropTypes.string,
	onSlideChange: PropTypes.func,
	breakpoints: PropTypes.objectOf(PropTypes.any),
	autoplay: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
	thumbs: PropTypes.objectOf(PropTypes.any),
	watchSlidesProgress: PropTypes.bool,
	watchOverflow: PropTypes.bool,
	centeredSlides: PropTypes.bool,
	freeMode: PropTypes.bool,
	slidesOffsetBefore: PropTypes.number,
	slidesOffsetAfter: PropTypes.number,
	loopedSlides: PropTypes.number,
	autoHeight: PropTypes.bool,
	threshold: PropTypes.number,
	direction: PropTypes.string,
	slideToClickedSlide: PropTypes.bool,
};

export { Slider };
