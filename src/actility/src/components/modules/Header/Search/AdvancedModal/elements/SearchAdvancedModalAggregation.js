import { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import { Checkbox } from 'elements/Checkbox';
import { InputSearch } from 'elements/InputSearch';
import { Accordion } from 'elements/Accordion';

import css from '../SearchAdvancedModal.module.scss';

const SearchAdvancedModalAggregation = (
	{
		data,
		name,
		label,
	},
) => {
	const fullFieldName = `filters.${name}`;
	const {
		register, getValues, setValue, watch,
	} = useFormContext();
	const [search, setSearch] = useState('');
	const values = getValues(fullFieldName);

	register(fullFieldName);
	watch(fullFieldName);

	const onChangeHandler = (isChecked, fieldName) => {
		const current = getValues(fullFieldName) || [];

		if (Array.isArray(current) && current.includes(fieldName) && !isChecked) {
			setValue(
				fullFieldName,
				(
					current.filter((item) => item !== fieldName)
				),
			);
		} else {
			setValue(
				fullFieldName,
				[
					...current,
					fieldName,
				],
			);
		}
	};

	const searchRegExp = new RegExp(`(${search})`, 'igm');
	const outputList = data?.filter((option) => searchRegExp.test(option?.label)) || [];

	return (
		<Accordion
			title={label}
		>
			<div className={css.categoriesSearch}>
				<InputSearch
					onChange={setSearch}
					value={search}
				/>
			</div>

			{outputList.map((option, optionIndex) => (
				<Checkbox
					name={option?.value}
					isChecked={values?.includes(option?.value)}
					onChange={onChangeHandler}
					key={option?.label || optionIndex}
				>
					{option?.label}
				</Checkbox>
			))}
		</Accordion>
	);
};

SearchAdvancedModalAggregation.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export { SearchAdvancedModalAggregation };
