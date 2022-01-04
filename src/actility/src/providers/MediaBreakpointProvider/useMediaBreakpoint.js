import { useReactiveVar } from '@apollo/client';
import { useMemo } from 'react';
import { BREAKPOINTS, currentBreakpointIndex } from './constants';

const BREAKPOINTS_NAMES = BREAKPOINTS.map(([name]) => name);

const useMediaBreakpoint = () => {
	const breakpointIndex = useReactiveVar(currentBreakpointIndex);

	return useMemo(() => ({
		currentBreakpoint: BREAKPOINTS?.[breakpointIndex],
		isBreakpointDown: (name) => BREAKPOINTS_NAMES.indexOf(name) < breakpointIndex,
		isBreakpointUp: (name) => BREAKPOINTS_NAMES.indexOf(name) >= breakpointIndex,
	}), [breakpointIndex]);
};

export { useMediaBreakpoint };
