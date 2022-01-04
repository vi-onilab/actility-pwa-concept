import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SpecValue.module.scss';

const SpecValue = (
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

SpecValue.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SpecValue.defaultProps = {
	children: null,
	className: null,
};

export { SpecValue };
