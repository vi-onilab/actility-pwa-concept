import { Icon } from 'elements/Icon';
import { TrashIcon } from 'icons';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import { useFilterContext } from '../../providers';

import css from './FilterTooltip.module.scss';

const VARIANTS = {
	default: css.variantDefault,
	mobile: css.variantMobile,
};

const FilterClearAll = ({ variant }) => {
	const { onChange } = useFilterContext();

	return (
		<button
			type="button"
			onClick={() => onChange((prev) => ({ ...prev, filters: {} }))}
			className={classNames(css.button, variant && VARIANTS?.[variant])}
		>
			<Icon src={TrashIcon} className={css.icon} />
			<span className={css.buttonTitle}>Clear all</span>
		</button>
	);
};

FilterClearAll.propTypes = {
	variant: PropTypes.oneOf(['default', 'mobile']),
};

FilterClearAll.defaultProps = {
	variant: 'default',
};

export { FilterClearAll };
