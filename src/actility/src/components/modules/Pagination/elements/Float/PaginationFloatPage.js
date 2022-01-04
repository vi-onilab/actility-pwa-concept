import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './PaginationFloat.module.scss';

const PaginationFloatPage = (
	{
		page,
		className,
		isDelimiter,
		isActive,
		onClick,
	},
) => (
	<button
		type="button"
		onClick={onClick}
		className={classNames(
			css.item,
			className,
			isDelimiter && css.itemDelimiter,
			isActive && css.isActive,
		)}
	>
		{page || '...'}
	</button>
);

PaginationFloatPage.propTypes = {
	className: PropTypes.string,
	page: PropTypes.number,
	isDelimiter: PropTypes.bool,
	isActive: PropTypes.bool,
	onClick: PropTypes.func,
};

PaginationFloatPage.defaultProps = {
	className: null,
	page: null,
	isDelimiter: null,
	isActive: null,
	onClick: null,
};

export { PaginationFloatPage };
