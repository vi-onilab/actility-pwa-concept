import PropTypes from 'prop-types';
import { classNames } from 'helpers';
import { useEffect, useRef, useState } from 'react';

import css from './CompareTableHeader.module.scss';

const CompareTableHeader = (
	{
		children,
		className,
	},
) => {
	const ref = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
			},
			{ threshold: [1] },
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(ref.current);
				setIsVisible(false);
			}
		};
	}, [ref]);

	return (
		<>
			<div ref={ref} className={css.shadowElement} />
			<div
				className={classNames(css.wrapper, className, isVisible && css.fixed)}
			>
				{children}
			</div>
			{isVisible && <div className={css.wrapperShadow} />}
		</>
	);
};

CompareTableHeader.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.func,
	]),
	className: PropTypes.string,
};

CompareTableHeader.defaultProps = {
	children: null,
	className: null,
};

export { CompareTableHeader };
