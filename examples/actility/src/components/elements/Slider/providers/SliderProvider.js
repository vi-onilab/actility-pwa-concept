import { createContext, memo, useContext } from 'react';
import PropTypes from 'prop-types';

const SliderContext = createContext({
	value: {},
	slider: {},
});
const useSliderContext = () => useContext(SliderContext);

const SliderProvider = memo((
	{
		children,
		initial,
		slider,
	},
) => {
	const context = {
		value: initial,
		slider,
	};

	return (
		<SliderContext.Provider value={context}>
			{children}
		</SliderContext.Provider>
	);
});

SliderProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	initial: PropTypes.shape({
		slidesPerView: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		spaceBetween: PropTypes.number,
		loop: PropTypes.bool,
		onSlideChange: PropTypes.func,
		breakpoints: PropTypes.objectOf(PropTypes.any),
		autoplay: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
		centeredSlides: PropTypes.bool,
		scrollbar: PropTypes.bool,
		freeMode: PropTypes.bool,
		slidesOffsetBefore: PropTypes.number,
		slidesOffsetAfter: PropTypes.number,
		loopedSlides: PropTypes.number,
		autoHeight: PropTypes.bool,
		threshold: PropTypes.number,
	}),
	slider: PropTypes.oneOfType([PropTypes.object]),
};

SliderProvider.defaultProps = {
	initial: {},
	slider: {},
};

export { SliderProvider, useSliderContext };
