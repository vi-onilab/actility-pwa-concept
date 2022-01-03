import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useCurrencyContext } from 'providers';

import { usePriceContext } from './Price';

import css from './Price.module.scss';

const PriceCurrentValue = (
	{
		className,
		value,
		isRange,
	},
) => {
	const currency = useCurrencyContext();
	const context = usePriceContext();
	const currentValueReal = context?.currentValue ?? value ?? context?.initialValue;
	const isRangeReal = context?.isRange ?? isRange;

	return (
		<div className={classNames(css.price, className)}>
			{`${isRangeReal ? 'from ' : ''}${currency.transform(currentValueReal).label}`}
		</div>
	);
};

PriceCurrentValue.propTypes = {
	className: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isRange: PropTypes.bool,
};

PriceCurrentValue.defaultProps = {
	className: null,
	value: null,
	isRange: false,
};

export { PriceCurrentValue };
