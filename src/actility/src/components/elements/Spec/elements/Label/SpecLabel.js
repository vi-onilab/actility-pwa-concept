import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SpecLabel.module.scss';

const SpecLabel = (
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

SpecLabel.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SpecLabel.defaultProps = {
	children: null,
	className: null,
};

export { SpecLabel };
