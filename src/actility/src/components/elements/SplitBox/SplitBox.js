import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';

import css from './SplitBox.module.scss';

const SplitBox = (
	{
		children,
		className,
	},
) => (
	<Flex
		wrap="wrap"
		className={classNames(css.section, className)}
	>
		{children}
	</Flex>
);

SplitBox.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

SplitBox.defaultProps = {
	children: null,
	className: null,
};

export { SplitBox };
