import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { Flex } from 'elements/Flex';

import css from './NotificationsFloatLayout.module.scss';

const NotificationsFloatLayout = (
	{
		children,
		className,
	},
) => (
	<Flex
		direction="column"
		className={classNames(css.wrapper, className)}
	>
		{children}
	</Flex>
);

NotificationsFloatLayout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

NotificationsFloatLayout.defaultProps = {
	children: null,
	className: null,
};

export { NotificationsFloatLayout };
