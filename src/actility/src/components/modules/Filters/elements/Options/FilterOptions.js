import PropTypes from 'prop-types';

import { FilterOptionsPrice } from './FilterOptionsPrice';
import { FilterOptionsCheckbox } from './FilterOptionsCheckbox';
import { useFilterContext } from '../../providers';

const FilterOptions = (
	{
		data,
	},
) => {
	const { values } = useFilterContext();

	switch (data?.type) {
	case 'price':
		return (
			<FilterOptionsPrice
				value={values?.filters?.[data?.type]}
				data={data}
			/>
		);
	default:
		return (
			<FilterOptionsCheckbox data={data} />
		);
	}
};

FilterOptions.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
};

FilterOptions.defaultProps = {
	data: null,
};

export { FilterOptions };
