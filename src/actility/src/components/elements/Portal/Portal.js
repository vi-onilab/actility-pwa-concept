import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Portal = (
	{
		children,
	},
) => (
	createPortal(
		children,
		document.body,
	)
);

Portal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
};

Portal.defaultProps = {
	children: null,
};

export { Portal };
