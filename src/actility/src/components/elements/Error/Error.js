import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './Error.module.scss';

const Error = (
	{
		children,
		className,
		value,
	},
) => (
	<div
		className={classNames(css.wrapper, className)}
	>
		{children}

		{(value?.message?.length > 0 || value?.length > 0) && (
			<p className={css.error}>{value?.message || value}</p>
		)}
	</div>
);

Error.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	value: PropTypes.string,
};

Error.defaultProps = {
	children: null,
	className: null,
	value: null,
};

export { Error };
