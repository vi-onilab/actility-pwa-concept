import PropTypes from 'prop-types';

import { SwiperSlide } from 'swiper/react';
import { memo } from 'react';

const SliderSlide = memo(({ children, className, onClick }) => (
	<SwiperSlide
		onClick={onClick}
		className={className}
	>
		{children}
	</SwiperSlide>
));

SliderSlide.displayName = 'SwiperSlide';

SliderSlide.defaultProps = {
	className: null,
	onClick: null,
};

SliderSlide.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

export { SliderSlide };
