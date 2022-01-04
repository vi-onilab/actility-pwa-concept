import { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntersectionObserver } from 'hooks';

const InViewVisible = (
	{
		children,
		by,
	},
) => {
	const [isVisible, setVisible] = useState(false);

	useIntersectionObserver(
		({ isIntersecting }) => {
			setVisible(isIntersecting);
		}, [by],
	);

	return (
		isVisible && children
	);
};

InViewVisible.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	by: PropTypes.oneOfType([PropTypes.object]),
};

InViewVisible.defaultProps = {
	children: null,
	by: null,
};

export { InViewVisible };
