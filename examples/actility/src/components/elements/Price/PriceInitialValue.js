import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useCurrencyContext } from 'providers';

import { usePriceContext } from './Price';

import css from './Price.module.scss';

const PriceInitialValue = (
	{
		className,
		value,
	},
) => {
	const currency = useCurrencyContext();
	const context = usePriceContext();
	const currentValueReal = context?.currentValue;
	const initialValueReal = context?.initialValue ?? value;

	return (
		(!context || (currentValueReal !== initialValueReal)) && (
			<div className={classNames(css.old, className)}>
				{currency.transform(initialValueReal).label}
			</div>
		)
	);
};

PriceInitialValue.propTypes = {
	className: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PriceInitialValue.defaultProps = {
	className: null,
	value: null,
};

export { PriceInitialValue };
