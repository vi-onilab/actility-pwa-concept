import PropTypes from 'prop-types';
import { classNames } from 'helpers';

import css from './SpecGroup.module.scss';

const SpecGroup = (
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

SpecGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SpecGroup.defaultProps = {
	children: null,
	className: null,
};

export { SpecGroup };
