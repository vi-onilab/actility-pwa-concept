import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import InputRange from 'elements/InputRange';

import css from '../SearchAdvancedModal.module.scss';

const SearchAdvancedModalPrices = (
	{
		min,
		max,
	},
) => {
	const fieldName = 'filters.price';
	const {
		watch, register, getValues, setValue,
	} = useFormContext();

	useEffect(() => {
		if ((min || max) && !getValues(fieldName)) {
			setValue(fieldName, [min, max]);
		}
	}, [min, max, getValues, setValue]);

	if (min === max) {
		return null;
	}

	register(fieldName);
	watch(fieldName, [min, max]);

	return (
		<div className={css.price}>
			<p className={css.priceTitle}>Unit Price Range</p>
			<InputRange
				min={min}
				max={max}
				values={getValues(fieldName) || [min, max]}
				onChange={(values) => (
					setValue(fieldName, values)
				)}
				variant="row"
			/>
		</div>
	);
};

SearchAdvancedModalPrices.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
};

SearchAdvancedModalPrices.defaultProps = {
	min: null,
	max: null,
};

export { SearchAdvancedModalPrices };
