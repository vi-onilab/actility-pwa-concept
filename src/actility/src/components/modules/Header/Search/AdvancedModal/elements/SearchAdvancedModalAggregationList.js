import { memo } from 'react';
import PropTypes from 'prop-types';
import { SearchAdvancedModalAggregation } from './SearchAdvancedModalAggregation';

import css from '../SearchAdvancedModal.module.scss';

const SearchAdvancedModalAggregationList = (
	{
		data,
	},
) => (
	<div className={css.categories}>
		{(
			data
				?.filter(({ attributeCode }) => attributeCode !== 'price')
				?.map((aggregate, aggregateIndex) => (
					<SearchAdvancedModalAggregation
						key={aggregate?.attributeCode || aggregateIndex}
						data={aggregate?.options}
						name={aggregate?.attributeCode}
						label={aggregate?.label}
					/>
				))
		)}
	</div>
);

SearchAdvancedModalAggregationList.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

const SearchAdvancedModalAggregationListMemo = memo(
	SearchAdvancedModalAggregationList,
	(prev, next) => (
		prev.data === next.data
	),
);

export { SearchAdvancedModalAggregationList, SearchAdvancedModalAggregationListMemo };
