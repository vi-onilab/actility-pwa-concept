import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './CompareTable.module.scss';

const CompareTable = (
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

CompareTable.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CompareTable.defaultProps = {
	children: null,
	className: null,
};

export { CompareTable };
