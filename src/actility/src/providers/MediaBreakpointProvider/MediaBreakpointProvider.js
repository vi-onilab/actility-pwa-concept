import { useEffect, useRef } from 'react';
import { BREAKPOINTS, currentBreakpointIndex } from './constants';

const breakpointHandler = () => {
	const newBreakpointIndex = (
		BREAKPOINTS
			.findIndex(([, width]) => window.innerWidth >= width)
	);

	if (newBreakpointIndex !== currentBreakpointIndex()) {
		currentBreakpointIndex(newBreakpointIndex);
	}
};

breakpointHandler();

const MediaBreakpointProvider = ({ children }) => {
	const ref = useRef(null);

	useEffect(() => {
		const handler = () => {
			clearTimeout(ref.current);

			ref.current = setTimeout(breakpointHandler, 200);
		};
		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		};
	}, [ref]);

	return children;
};

export { MediaBreakpointProvider };
