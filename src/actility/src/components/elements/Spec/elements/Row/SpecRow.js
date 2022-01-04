import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SpecRow.module.scss';

const SpecRow = (
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

SpecRow.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SpecRow.defaultProps = {
	children: null,
	className: null,
};

export { SpecRow };
