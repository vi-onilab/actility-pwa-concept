import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Spec.module.scss';

const Spec = (
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

Spec.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

Spec.defaultProps = {
	children: null,
	className: null,
};

export { Spec };
