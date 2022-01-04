import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'elements/InputRange';

import { useFilterContext } from '../../providers';

const FilterOptionsPrice = (
	{
		data,
		value,
	},
) => {
	const { onChange } = useFilterContext();
	const [range, setRange] = useState(() => (
		value?.[data?.type] || data.payload || []
	));

	useEffect(() => {
		setRange(value || data.payload || []);
	}, [value, setRange, data.payload]);

	return (
		<InputRange
			min={data?.payload?.[0]}
			max={data?.payload?.[1]}
			values={range}
			onFinalChange={() => {
				onChange((prev) => ({
					...(prev || {}),
					filters: {
						...(prev?.filters || {}),
						[data?.type]: range,
					},
				}));
			}}
			onChange={setRange}
		/>
	);
};

FilterOptionsPrice.propTypes = {
	data: PropTypes.oneOfType([PropTypes.object]),
	value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

FilterOptionsPrice.defaultProps = {
	data: null,
	value: null,
};

export { FilterOptionsPrice };
