import PropTypes from 'prop-types';

import css from './FilterTooltip.module.scss';
import { FilterClearAll } from './FilterClearAll';

const FilterTooltip = ({ result }) => (
	<div className={css.wrapper}>
		<p className={css.text}>{result}</p>
		<FilterClearAll variant="mobile" />
	</div>
);

FilterTooltip.propTypes = {
	result: PropTypes.string,
};

FilterTooltip.defaultProps = {
	result: null,
};

export { FilterTooltip };
