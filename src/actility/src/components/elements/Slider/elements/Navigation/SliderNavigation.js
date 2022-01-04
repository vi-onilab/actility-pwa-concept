import { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'elements/Icon';
import { classNames } from 'helpers';
import { ChevronArrowRightIcon } from 'icons';

import { useSliderContext } from '../../providers';

import css from './SliderNavigation.module.scss';

const VARIANTS = {
	default: css.variantDefault,
};

const SliderNavigation = memo((
	{
		className,
		prevClassName,
		nextClassName,
		variant,
	},
) => {
	const nextRef = useRef(null);
	const prevRef = useRef(null);
	const { slider } = useSliderContext();

	useEffect(() => {
		if (nextRef.current && prevRef.current && slider && slider?.params?.navigation?.nextEl !== nextRef.current) {
			try {
				slider.params.navigation.nextEl = nextRef.current;
				slider.params.navigation.prevEl = prevRef.current;

				slider.navigation.init();
				slider.navigation.update();
			} catch (e) {
				//
			}
		}

		return () => {
			if (slider) {
				try {
					slider?.navigation.destroy?.();
				} catch (e) {
					//
				}
			}
		};
	}, [slider]);

	return (
		<div
			className={classNames(
				css.wrapper,
				className,
				(variant && VARIANTS?.[variant]) || VARIANTS.default,
			)}
		>
			<div
				ref={prevRef}
				className={classNames(
					'swiper-button-prev',
					css.navigationBtn,
					prevClassName,
				)}
			>
				<Icon src={ChevronArrowRightIcon} className={css.navigationBtnIcon} />
			</div>

			<div
				ref={nextRef}
				className={classNames(
					'swiper-button-next',
					css.navigationBtn,
					nextClassName,
				)}
			>
				<Icon src={ChevronArrowRightIcon} className={css.navigationBtnIcon} />
			</div>
		</div>
	);
});

SliderNavigation.propTypes = {
	className: PropTypes.string,
	prevClassName: PropTypes.string,
	nextClassName: PropTypes.string,
	variant: PropTypes.oneOf(['default']),
};

SliderNavigation.defaultProps = {
	className: null,
	prevClassName: null,
	nextClassName: null,
	variant: 'default',
};

export { SliderNavigation };
