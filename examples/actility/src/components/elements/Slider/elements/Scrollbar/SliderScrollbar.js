import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { useSliderContext } from '../../providers';

import css from './SliderScrollbar.module.scss';

const VARIANTS = {
	default: css.variantDefault,
};

const SliderScrollbar = (
	{
		draggable,
		hide,
		snapOnRelease,
		className,
		variant,
	},
) => {
	const wrapperRef = useRef(null);
	const { slider } = useSliderContext();

	useEffect(() => {
		if (wrapperRef.current && slider && slider?.params?.scrollbar?.el !== wrapperRef.current) {
			try {
				slider.params.scrollbar.draggable = draggable;
				slider.params.scrollbar.hide = hide;
				slider.params.scrollbar.snapOnRelease = snapOnRelease;
				slider.params.scrollbar.el = wrapperRef.current;
				slider.params.scrollbar.dragClass = css.drag;
				slider.params.scrollbar.draggable = draggable;

				slider.scrollbar?.init?.();
				slider.scrollbar?.update?.();
			} catch (e) {
				//
			}
		}

		return () => {
			if (slider && slider?.params?.scrollbar) {
				try {
					slider?.scrollbar.destroy?.();
				} catch (e) {
					//
				}
			}
		};
	}, [draggable, hide, snapOnRelease, slider]);

	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				(variant && VARIANTS?.[variant]) || VARIANTS.default,
			)}
			ref={wrapperRef}
		/>
	);
};

SliderScrollbar.propTypes = {
	draggable: PropTypes.bool,
	hide: PropTypes.bool,
	snapOnRelease: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default']),
};

SliderScrollbar.defaultProps = {
	draggable: true,
	hide: false,
	snapOnRelease: true,
	className: null,
	variant: 'default',
};

export { SliderScrollbar };
