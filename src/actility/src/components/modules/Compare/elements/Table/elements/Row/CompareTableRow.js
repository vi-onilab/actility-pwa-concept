import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './CompareTableRow.module.scss';

const CompareTableRow = (
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

CompareTableRow.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CompareTableRow.defaultProps = {
	children: null,
	className: null,
};

export { CompareTableRow };
