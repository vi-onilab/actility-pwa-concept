import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Section } from 'elements/Section';

import css from './ProductSection.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	primary: css.variantPrimary,
};

const ProductSection = (
	forwardRef(
		(
			{
				id,
				children,
				className,
				variant,
			},
			ref,
		) => (
			<Section
				id={id}
				ref={ref}
				className={classNames(
					css.wrapper,
					className,
					(variant && VARIANTS?.[variant]) || VARIANTS.default,
				)}
			>
				{children}
			</Section>
		),
	)
);

ProductSection.displayName = 'ProductSection';

ProductSection.propTypes = {
	id: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'primary', false]),
};

ProductSection.defaultProps = {
	id: null,
	children: null,
	className: null,
	variant: 'default',
};

export { ProductSection };
