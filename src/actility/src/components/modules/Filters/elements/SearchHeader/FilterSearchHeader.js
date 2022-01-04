import { useFilterContext } from '../../providers';

import css from './FilterSearchHeader.module.scss';

const FilterSearchHeader = () => {
	const { values } = useFilterContext();

	return (
		values?.q ? (
			<div className={css.wrapper}>
				<p className={css.title}>
					Search results for
					&#34;
					{values?.q}
					&#34;
				</p>
			</div>
		) : null
	);
};

FilterSearchHeader.propTypes = {};

FilterSearchHeader.defaultProps = {};

export { FilterSearchHeader };
