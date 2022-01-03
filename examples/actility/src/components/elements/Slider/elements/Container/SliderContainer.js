import PropTypes from 'prop-types';
import { Swiper } from 'swiper/react';
import { classNames } from 'helpers';

import { useSliderContext } from '../../providers';

import css from './SliderContainer.module.scss';

const SliderContainer = (
	{
		children,
		className,
		onInit,
	},
) => {
	const { value } = useSliderContext();

	return (
		<Swiper
			{...value}
			onSwiper={(swiper) => (onInit?.(swiper) || value?.onSwiper?.(swiper))}
			className={classNames(
				css.slider,
				className,
			)}
		>
			{children}
		</Swiper>
	);
};

SliderContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	onInit: PropTypes.func,
};

SliderContainer.defaultProps = {
	children: null,
	className: null,
	onInit: null,
};

export { SliderContainer };
