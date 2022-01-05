import PropTypes from 'prop-types';
import { useMediaBreakpoint } from 'providers';

const MediaBreakpoint = (
	{
		children,
		direction,
		name,
	},
) => {
	const { isBreakpointDown, isBreakpointUp } = useMediaBreakpoint();

	if (!children) {
		return null;
	}

	const childrenArgs = { isBreakpointDown, isBreakpointUp };

	if (typeof children === 'function') {
		return children(childrenArgs);
	}

	if (direction === 'up') {
		return isBreakpointUp(name) ? children : null;
	}

	return isBreakpointDown(name) ? children : null;
};

MediaBreakpoint.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	direction: PropTypes.oneOf(['up', 'down']),
	name: PropTypes.string,
};

MediaBreakpoint.defaultProps = {
	children: null,
	direction: 'down',
};

export { MediaBreakpoint };
