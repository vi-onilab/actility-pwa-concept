import { useRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useIntersectionObserver } from 'hooks';

const InView = (
	{
		children,
		className,
		onInView,
	},
) => {
	const ref = useRef();

	useIntersectionObserver(({ isIntersecting }) => {
		if (isIntersecting) {
			onInView?.();
		}
	}, [ref]);

	return (
		<span
			ref={ref}
			className={classNames(className)}
		>
			{children}
		</span>
	);
};

InView.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
	onInView: PropTypes.func,
};

InView.defaultProps = {
	children: null,
	className: null,
	onInView: null,
};

export { InView };
