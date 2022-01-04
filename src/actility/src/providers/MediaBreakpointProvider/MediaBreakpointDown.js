import PropTypes from 'prop-types';
import { MediaBreakpoint } from './MediaBreakpoint';

const MediaBreakpointDown = (props) => <MediaBreakpoint {...props} direction="down" />;

MediaBreakpointDown.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	name: PropTypes.string.isRequired,
};

MediaBreakpointDown.defaultProps = {};

export { MediaBreakpointDown };
