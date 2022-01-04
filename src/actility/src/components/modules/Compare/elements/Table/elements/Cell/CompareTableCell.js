import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './CompareTableCell.module.scss';

const CompareTableCell = (
	{
		children,
		className,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{children}
	</div>
);

CompareTableCell.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CompareTableCell.defaultProps = {
	children: null,
	className: null,
};

export { CompareTableCell };
