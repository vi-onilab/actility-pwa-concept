import PropTypes from 'prop-types';
import { MediaBreakpoint } from './MediaBreakpoint';

const MediaBreakpointUp = (props) => <MediaBreakpoint {...props} direction="up" />;

MediaBreakpointUp.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]).isRequired,
	name: PropTypes.string.isRequired,
};

MediaBreakpointUp.defaultProps = {};

export { MediaBreakpointUp };
