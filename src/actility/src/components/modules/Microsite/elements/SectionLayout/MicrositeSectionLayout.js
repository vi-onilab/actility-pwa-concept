import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './MicrositeSectionLayout.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	primary: css.variantPrimary,
	paddingTop: css.variantPaddingTop,
	largePadding: css.variantLargePadding,
	largePaddingTop: css.variantLargePaddingTop,
	largePaddingBottom: css.variantLargePaddingBottom,
};

const MicrositeSectionLayout = forwardRef(
	(
		{
			children,
			className,
			variant,
			id,
		},
		ref,
	) => (
		<div
			ref={ref}
			id={id}
			className={classNames(
				css.wrapper,
				className,
				(variant && VARIANTS?.[variant]) || VARIANTS.default,
			)}
		>
			{children}
		</div>
	),
);

MicrositeSectionLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	id: PropTypes.string,
	className: PropTypes.string,
	variant: PropTypes.oneOf([false, 'default', 'primary', 'largePadding']),
};

MicrositeSectionLayout.defaultProps = {
	children: null,
	id: null,
	className: null,
	variant: 'default',
};

export { MicrositeSectionLayout };
