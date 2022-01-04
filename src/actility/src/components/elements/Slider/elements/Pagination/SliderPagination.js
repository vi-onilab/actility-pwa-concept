import { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { useSliderContext } from '../../providers';

import css from './SliderPagination.module.scss';

const VARIANTS = {
	default: css.variantDefault,
};

const SliderPagination = memo((
	{
		clickable,
		dynamicBullets,
		dynamicMainBullets,
		hideOnClick,
		className,
		variant,
	},
) => {
	const wrapperRef = useRef(null);
	const { slider } = useSliderContext();

	useEffect(() => {
		if (wrapperRef.current && slider?.mounted && slider?.params?.pagination?.el !== wrapperRef.current) {
			try {
				slider.params.pagination.clickable = clickable;
				slider.params.pagination.hideOnClick = hideOnClick;
				slider.params.pagination.el = wrapperRef.current;
				slider.params.pagination.bulletClass = css.bullet;
				slider.params.pagination.bulletActiveClass = css.isActive;
				slider.params.pagination.currentClass = css.isCurrent;
				slider.params.pagination.clickableClass = css.isClickable;
				slider.params.pagination.dynamicBullets = dynamicBullets;
				slider.params.pagination.dynamicMainBullets = dynamicMainBullets;
				slider.params.pagination.hiddenClass = css.isHidden;

				if (!slider.pagination?.el && slider?.initialized) {
					slider?.pagination?.init?.();
					slider?.pagination?.render?.();
					slider?.pagination?.update?.();
				}
			} catch (e) {
				//
			}
		}

		return () => {
			if (slider && slider?.params?.pagination && slider?.initialized) {
				try {
					slider?.pagination?.destroy?.();
				} catch (e) {
					//
				}
			}
		};
	}, [clickable, dynamicBullets, dynamicMainBullets, hideOnClick, slider]);

	return (
		<div
			ref={wrapperRef}
			className={classNames(
				css.wrapper,
				className,
				(variant && VARIANTS?.[variant]) || VARIANTS.default,
			)}
		/>
	);
});

SliderPagination.propTypes = {
	clickable: PropTypes.bool,
	dynamicBullets: PropTypes.bool,
	dynamicMainBullets: PropTypes.number,
	hideOnClick: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default']),
};

SliderPagination.defaultProps = {
	clickable: true,
	dynamicBullets: false,
	dynamicMainBullets: 1,
	hideOnClick: false,
	className: null,
	variant: 'default',
};

export { SliderPagination };
