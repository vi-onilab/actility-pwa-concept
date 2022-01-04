import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './DelimiterLine.module.scss';

const DelimiterLine = (
	{
		children,
		className,
	},
) => (
	<div
		className={classNames(css.delimiter, className)}
	>
		<span className={css.delimiterTitle}>{children}</span>
	</div>
);

DelimiterLine.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

DelimiterLine.defaultProps = {
	children: null,
	className: null,
};

export { DelimiterLine };
